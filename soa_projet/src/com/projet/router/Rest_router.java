package com.projet.router;

import java.util.List;
import java.util.Map;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.projet.model.User;
import com.projet.service.ClientImpl;
import com.projet.service.User_interface;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class Rest_router {

    private User_interface service = new ClientImpl();
 
    // Ajouter un utilisateur
    @POST
    @Path("/add")
    public Map<String, String> addUser(User user) {
        return service.addUser(user);
    }

    //  Modifier un utilisateur
    @PUT
    @Path("/update/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateUser(
            @PathParam("id") long id,
            User user
    ) {
        service.updateUser(id, user);
        return Response.ok(user).build(); 
    }

    //  Supprimer un utilisateur
    @DELETE
    @Path("/delete/{id}")
    public Response deleteUser(@PathParam("id") long id) {
        service.deleteUser(id);
        return Response.ok().build();
    }
    

    //  Chercher par ID
    @GET
    @Path("/id/{id}")
    public User getUserById(@PathParam("id") long id) {
        return service.getUserById(id);
    }
    // chercher par nom
    @GET
    @Path("/nom/{nom}")
    public List<User> getUserByName(@PathParam("nom") String nom) {
        return service.getUserByName(nom);
    }

    //  Lister tous les utilisateurs
    @GET
    @Path("/all")
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }
}
