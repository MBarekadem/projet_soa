import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Plus } from "lucide-react";

export default function Explorer() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAdd, setShowAdd] = useState(false);

  // 🔹 FORM - Ajoutez tous les champs
  const [nom, setNom] = useState("");
  const [cin, setCin] = useState("");
  const [mail, setMail] = useState("");
  const [description, setDescription] = useState("");
  const [tel, setTel] = useState("");
  const [image, setImage] = useState("");
  const [adress, setAd] = useState("");
  const [sex, setSex] = useState("");

  // 🔹 LOAD USERS
  useEffect(() => {
    fetch("http://localhost:8080/soa_projet/users/all")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Erreur chargement:", err));
  }, []);
useEffect(() => {
  const delay = setTimeout(() => {
    searchUsers();
  }, 400); // debounce

  return () => clearTimeout(delay);
}, [searchTerm]);

  // 🔹 SEARCH
  const searchUsers = async () => {
    if (!searchTerm || searchTerm.trim() === "") {
      // recharger toute la liste
      fetch("http://localhost:8080/soa_projet/users/all")
        .then(res => res.json())
        .then(data => setUsers(data));
      return;
    }

    try {
      // 🔹 si c’est un nombre → search par ID
      if (!isNaN(searchTerm)) {
        const res = await fetch(
          `http://localhost:8080/soa_projet/users/id/${searchTerm}`
        );

        if (!res.ok) {
          setUsers([]); // aucun résultat
          return;
        }

        const user = await res.json();
        setUsers(user ? [user] : []);
      }
      // 🔹 sinon → search par NOM
      else {
        const res = await fetch(
          `http://localhost:8080/soa_projet/users/nom/${searchTerm}`
        );

        const data = await res.json();
        setUsers(data);
      }
    } catch (err) {
      console.error("Erreur recherche :", err);
    }
  };

  // 🔹 ADD USER - corrigé
  const handleAddUser = async () => {
    if (!nom || !cin || !sex) {
      alert("les champs * sont obligatoires");
      return;
    }

    try {
      const newUser = {
        nom,
        cin,
        mail: mail || "",
        description: description || "",
        tel: tel || "",
        image: image || "",
        adresse: adress,
        sex: sex
      };

      console.log("Envoi:", newUser); // Pour debug

      const res = await fetch("http://localhost:8080/soa_projet/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();
      console.log("Réponse backend:", data); // Pour debug

      if (data.status === "success") {
        // Recharger la liste
        const updatedRes = await fetch("http://localhost:8080/soa_projet/users/all");
        const updatedData = await updatedRes.json();
        setUsers(updatedData);

        // Réinitialiser le formulaire
        setNom("");
        setCin("");
        setMail("");
        setDescription("");
        setTel("");
        setImage("");
        setSex("");
        setAd("");
        setShowAdd(false);
      } else {
        alert(data.message || "Erreur inconnue");
      }

    } catch (err) {
      console.error("Erreur:", err);
      alert("Erreur serveur: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-4xl font-bold">Liste des personnes</h1>
          <button
            onClick={() => setShowAdd(true)}
            className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg font-semibold flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Ajouter
          </button>
        </div>
      </section>

      {/* SEARCH */}
      <section className="py-8">

        <div className="max-w-7xl mx-auto px-4">
          
            <input
              type="text"
              placeholder="Rechercher par nom ou Id..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 border rounded-lg shadow-sm"
            />
            

          {/* LIST */}
          {users.length === 0 ? (
            <div className="mt-10 text-center bg-white p-10 rounded-xl shadow">
              <h3 className="text-xl font-semibold">Aucune personne trouvée</h3>

            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {users.map(user => (
                <Card key={user.id} user={user} setUsers={setUsers} />))}
            </div>
          )}

        </div>
      </section>

      {/* MODAL ADD - Corrigé avec tous les champs */}
      {showAdd && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Ajouter une personne</h2>
            <input
              type="text"
              className="w-full p-2 border rounded mb-3"
              placeholder="Nom *"
              value={nom}
              onChange={e => setNom(e.target.value)}
              required
            />

            <input
              type="text"
              className="w-full p-2 border rounded mb-3"
              placeholder="CIN *"
              value={cin}
              onChange={e => setCin(e.target.value)}
              required
            />

            <input
              type="email"
              className="w-full p-2 border rounded mb-3"
              placeholder="Email"
              value={mail}
              onChange={e => setMail(e.target.value)}
            />

            <input
              type="tel"
              className="w-full p-2 border rounded mb-3"
              placeholder="Téléphone"
              value={tel}
              onChange={e => setTel(e.target.value)}
            />

            <textarea
              className="w-full p-2 border rounded mb-3"
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={3}
            />

            <input
              type="text"
              className="w-full p-2 border rounded mb-3"
              placeholder="Adresse *"
              value={adress}
              onChange={e => setAd(e.target.value)}
              required
            />

            <p className="mb-1">Sexe *</p>
            <div className="flex gap-4 mb-3">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="sex"
                  value="H"
                  checked={sex === "H"}
                  onChange={e => setSex(e.target.value)}
                />
                H
              </label>

              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="sex"
                  value="F"
                  checked={sex === "F"}
                  onChange={e => setSex(e.target.value)}
                />
                F
              </label>
            </div>

            <input
              type="text"
              className="w-full p-2 border rounded mb-4"
              placeholder="URL de l'image"
              value={image}
              onChange={e => setImage(e.target.value)}
            />

            <div className="flex gap-2">
              <button
                onClick={handleAddUser}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
              >
                Ajouter
              </button>
              <button
                onClick={() => setShowAdd(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-300"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}