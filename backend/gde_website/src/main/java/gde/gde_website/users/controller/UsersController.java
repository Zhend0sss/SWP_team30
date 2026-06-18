package gde.gde_website.users.controller;

import gde.gde_website.games.controller.GamesController;
import gde.gde_website.users.service.UsersService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class UsersController {
    private static final Logger gamesControllerLogger = LoggerFactory.getLogger(GamesController.class);

    private final UsersService userService;

    // #TODO: implement this function
    // This function must implement user registration logic,
    // it must save new user to the DB, and return user session token in ideal scenario
    // In the ideal case this function must return ResponseEntity<SessionToken>
    // where SessionToken is a user session token which is provided by the AuthenticationController

//    @PostMapping("/register")
//    public ResponseEntity<> register() {
//        return null;
//    }

    // #TODO: implement this function
    // This function must implement user login logic,
    // it must check requested username/email + passwordHash from DB, and return user session token in ideal scenario
    // In the ideal case this function must return ResponseEntity<SessionToken>
    // where SessionToken is a user session token which is provided by the AuthenticationController

//    @PostMapping("/login")
//    public ResponseEntity<> login() {
//        return null;
//    }
}
