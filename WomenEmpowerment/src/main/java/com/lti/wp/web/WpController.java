package com.lti.wp.web;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.wp.entities.StepRegister;
import com.lti.wp.exceptions.WpException;
import com.lti.wp.services.StepRegService;

@RestController
public class WpController {

	@Autowired
	private StepRegService service;

//	http://localhost:8282/WomenEmpowerment/getData
	@GetMapping(value="/stepregList",produces="application/json")
	public @ResponseBody List<StepRegister> getStepRegister() {
		ArrayList<StepRegister> list = null;
		try {
			System.out.println("Shubham");
			list = service.getStepRegister();
			System.out.println(list);
		} catch (WpException e) {
			e.printStackTrace();
		}
		return list;
	}
}
