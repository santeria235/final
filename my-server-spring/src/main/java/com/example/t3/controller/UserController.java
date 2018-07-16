package com.example.t3.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.t3.user.model.User;
import com.example.t3.user.repository.UserMapper;



@Controller
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200") 
public class UserController {
	
	@Autowired
	private UserMapper userMapper;

	@PostMapping(value = "/register")
	@ResponseBody
	public void registerUser(@RequestBody User user) {
		System.out.println("UserController #registerUser() called.");
		userMapper.registerUser(user);
		
	}	
	
	@PostMapping("/login")
	@ResponseBody
	public User login(@RequestBody User requestUser) { //Login : 앵귤러에서 던진 id/pw
		
		System.out.println(requestUser.getU_id());
		User user = userMapper.userLoginCheck(requestUser);
		if(user==null) {//아이디가 존재하지 않는다
			System.out.println("널이들어왔다");
			return null;
		}else {
			if(!user.getU_pw().equals(requestUser.getU_pw())) {//비밀번호가 틀렸다
				System.out.println("비번틀림");
				return null;
			}
		}
		System.out.println("제대로리턴!");
		System.out.println(user.toString());
		return user;
	}
	
//	@GetMapping
//	@ResponseBody
//	public Object getUsersView() {
//		List<User> users = userMapper.selectAll();
//		return users;
//	}
//	
//	@PostMapping("/enroll")
//	public String postUser(User user, Model model, HttpSession session, RedirectAttributes redirectAttributes) {
//		// 1.클라이언트 단 또는 서버 단에서 데이터 밸리드 체크를 적용하는 것을 권장한다.
//		// 1.이미 등록된 유저인지 중복체크를 선행한다.
//		userMapper.insert(user);
//		
//		redirectAttributes.addFlashAttribute("result", "OK");
//		return "redirect:/login";
//	}
}
