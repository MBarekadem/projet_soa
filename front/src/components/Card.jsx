import { useState, useEffect } from "react";
import sansh from "../imgs/homme.jpg";
import sansf from "../imgs/femme.jpg";

export default function Card({ user, setUsers }) {
  const [openModal, setOpenModal] = useState(false);

  const [formData, setFormData] = useState({
    nom: "",
    mail: "",
    tel: "",
    description: "",
    adresse: "",
    sex: "",
    image: ""
  });

  // 🖼️ image
  let imageUrl;
  if (user.image && user.image.trim() !== "") {
    imageUrl = user.image;
  } else if (user.sex === "H") {
    imageUrl = sansh;
  } else {
    imageUrl = sansf;
  }

  // 🟦 charger données dans modal
  useEffect(() => {
    if (openModal) {
      setFormData({
        nom: user.nom || "",
        mail: user.mail || "",
        tel: user.tel || "",
        description: user.description || "",
        adresse: user.adresse || "",
        sex: user.sex || "",
        image: user.image || ""
      });
    }
  }, [openModal, user]);

  //UPDATE USER
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:8080/soa_projet/users/update/${user.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, id: user.id }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert("❌ " + data.message);
        return;
      }

      // mise à jour locale
      setUsers(prev =>
        prev.map(u => (u.id === user.id ? data : u))
      );

      alert("Utilisateur modifié");
      setOpenModal(false);

    } catch (err) {
      alert("Erreur : " + err.message);
    }
  };

  // DELETE USER
  const handleDelete = async () => {
    const c = window.confirm("Supprimer cet utilisateur ?");
    if (!c) return;

    try {
      await fetch(
        `http://localhost:8080/soa_projet/users/delete/${user.id}`,
        { method: "DELETE" }
      );

      setUsers(prev => prev.filter(u => u.id !== user.id));
      alert(" Utilisateur supprimé !");
    } catch (err) {
      alert("Erreur suppression : " + err.message);
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">

        <img src={imageUrl} alt={user.nom} className="w-full h-48 object-cover" />

        <div className="p-4">
          <h2 className="text-xl font-bold">{user.nom}</h2>

          <p>Email : {user.mail}</p>
          <p>Téléphone : {user.tel}</p>
          <p>Description : {user.description}</p>
          <p className="font-semibold">Id : {user.id}</p>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setOpenModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Modifier
            </button>

            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      {/* MODAL UPDATE */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <form
            onSubmit={handleUpdate}
            className="bg-white p-6 rounded-xl w-full max-w-md"
          >
            <h2 className="text-2xl font-bold mb-4">Modifier utilisateur</h2>

            <input
              className="w-full p-2 border mb-2"
              placeholder="Nom"
              value={formData.nom}
              onChange={e => setFormData({ ...formData, nom: e.target.value })}
            />

            <input
              className="w-full p-2 border mb-2"
              placeholder="Email"
              value={formData.mail}
              onChange={e => setFormData({ ...formData, mail: e.target.value })}
            />

            <input
              className="w-full p-2 border mb-2"
              placeholder="Téléphone"
              value={formData.tel}
              onChange={e => setFormData({ ...formData, tel: e.target.value })}
            />

            <textarea
              className="w-full p-2 border mb-2"
              placeholder="Description"
              value={formData.description}
              onChange={e =>
                setFormData({ ...formData, description: e.target.value })
              }
            />

            <input
              className="w-full p-2 border mb-2"
              placeholder="Adresse"
              value={formData.adresse}
              onChange={e =>
                setFormData({ ...formData, adresse: e.target.value })
              }
            />

            <div className="flex gap-4 mb-4">
              <label>
                <input
                  type="radio"
                  checked={formData.sex === "H"}
                  onChange={() => setFormData({ ...formData, sex: "H" })}
                /> H
              </label>
              <label>
                <input
                  type="radio"
                  checked={formData.sex === "F"}
                  onChange={() => setFormData({ ...formData, sex: "F" })}
                /> F
              </label>
            </div>

            <input
              className="w-full p-2 border mb-4"
              placeholder="Image URL"
              value={formData.image}
              onChange={e =>
                setFormData({ ...formData, image: e.target.value })
              }
            />

            <div className="flex gap-2">
              <button className="flex-1 bg-blue-600 text-white py-2 rounded">
                Enregistrer
              </button>
              <button
                type="button"
                onClick={() => setOpenModal(false)}
                className="flex-1 bg-gray-300 py-2 rounded"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
