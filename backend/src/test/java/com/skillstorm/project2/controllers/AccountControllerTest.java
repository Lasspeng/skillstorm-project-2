// import static org.junit.jupiter.api.Assertions.assertEquals;
// import static org.junit.jupiter.api.Assertions.assertNotNull;
// import static org.junit.jupiter.api.Assertions.assertThrows;
// import static org.mockito.Mockito.mock;
// import static org.mockito.Mockito.when;

// import java.util.ArrayList;
// import java.util.List;
// import java.util.Optional;

// import org.junit.jupiter.api.Test;
// import org.mockito.InjectMocks;
// import org.mockito.Mock;
// import org.mockito.Mockito;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
// import org.springframework.boot.test.context.SpringBootTest;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.test.context.support.WithMockUser;
// import org.springframework.test.web.servlet.MockMvc;

// import com.cognixia.jump.furniture_app.exception.ResourceNotFoundException;
// import com.cognixia.jump.furniture_app.model.User;
// import com.cognixia.jump.furniture_app.model.User.Role;
// import com.cognixia.jump.furniture_app.repository.UserRepository;
// import com.fasterxml.jackson.databind.ObjectMapper;
// import com.skillstorm.project2.repositories.AccountRepository;

// import io.github.classgraph.Resource;

// @SpringBootTest
// @AutoConfigureMockMvc
// @WithMockUser(username = "user1", password = "pw123", roles = "ADMIN")
// public class AccountControllerTest {

//     @Autowired
//     private MockMvc mockMvc;

//     @InjectMocks
//     private AccountController acctController;

//     @Autowired
//     private ObjectMapper objectMapper;

//     @Mock
//     private AccountRepository acctRepo;


//     @Test
//     public void testGetAllUsers() throws Exception {

//         List<User> userList = new ArrayList<>();
//         userList.add(new User(1, "Hello", "World", Role.ROLE_USER, true));
//         userList.add(new User(2, "Goodbye", "World", Role.ROLE_USER, true));

//         when(userRepo.findAll()).thenReturn(userList);

//         List<User> users = userController.getAllUsers();
//         assertEquals(userList.size(), users.size());
//     }
    
//     @Test
//     void testGetUserById() throws Exception {
//         int id = 1;
//         User foundUser = new User(1, "Hello", "World", Role.ROLE_USER, true);

//         when(userRepo.findById(id)).thenReturn(Optional.of(foundUser));

//         ResponseEntity<User> result = userController.getUserById(id);
//         assertEquals(HttpStatus.OK, result.getStatusCode());
//         assertNotNull(result.getBody());
//         assertEquals(foundUser, result.getBody());
//     }

//     @Test
//     void testGetUserByIdNotFound() throws ResourceNotFoundException {
//         UserController ucMock = mock(UserController.class);
//         int id = 1;

//         when(userRepo.findById(id)).thenReturn(Optional.empty());
//         when(ucMock.getUserById(id)).thenThrow(ResourceNotFoundException.class);

//         // ResponseEntity<User> result = userController.getUserById(id);
//         assertThrows(ResourceNotFoundException.class, () ->  ucMock.getUserById(id));
//     }

    
//     @Test 
//     void testUpdateUser() throws Exception {
//         User user = new User(1, "Hello", "World", Role.ROLE_USER, true);
//         User updatedUser = new User(1, "Below", "World", Role.ROLE_USER, true);
        
//         when(userRepo.findById(Mockito.anyInt())).thenReturn(Optional.of(user));
//         when(userRepo.save(Mockito.any(User.class))).thenReturn(updatedUser);
        
//         ResponseEntity<User> result = userController.updateUser(user.getId(), updatedUser);
        
//         assertNotNull(result);
//         assertEquals(HttpStatus.OK, result.getStatusCode());
//     }
    
//     @Test
//     void testUpdateUserNotFound() throws Exception {
//         UserController ucMock = mock(UserController.class);
//         int id = 1;
//         User user = new User(1, "Hello", "World", Role.ROLE_USER, true); 
        
//         when(userRepo.findById(Mockito.anyInt())).thenReturn(Optional.empty());
//         when(ucMock.updateUser(id, user)).thenThrow(ResourceNotFoundException.class);
        
//         assertThrows(ResourceNotFoundException.class, () ->  ucMock.updateUser(id, user));
//     }
    
//     @Test
//     void testDeleteUser() throws Exception {
//         int id = 1;
//         User user = new User(1, "Hello", "World", Role.ROLE_USER, true); 
        
//         when(userRepo.findById(Mockito.anyInt())).thenReturn(Optional.of(user));
        
//         ResponseEntity<?> result = userController.deleteUserById(id);
        
//         assertNotNull(result);
//         assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());
//     }
    
//     @Test
//     void testDeleteUserNotFound() throws Exception {
//         UserController ucMock = mock(UserController.class);
//         int id = 1;
        
//         when(userRepo.findById(Mockito.anyInt())).thenReturn(Optional.empty());
//         when(ucMock.deleteUserById(id)).thenThrow(ResourceNotFoundException.class);
        
//         assertThrows(ResourceNotFoundException.class, () ->  ucMock.deleteUserById(id));
//     }
//     @Test
//     void testCreateUser() throws Exception {
//         // User createdUser = new User(1, "Hello", "World", Role.ROLE_USER, true);
        
//         // when(userRepo.save(Mockito.any(User.class))).thenReturn(createdUser);
        
//         // ResponseEntity<User> response = userController.createUser(createdUser);
        
//         // assertNotNull(response);
//         // assertEquals(HttpStatus.CREATED, response.getStatusCode());
//     }
// }
