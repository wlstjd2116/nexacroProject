package sample.web;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import sample.service.LoginService;
import sample.service.SampleService;
import sample.vo.LoginVO;

@Controller
public class LoginController {
	
  @Resource(name = "loginService")
  private LoginService loginService;
	
	@RequestMapping(value="/login.do")
	public NexacroResult login(@ParamDataSet(name="loginInput") LoginVO vo ) throws Exception{
		NexacroResult result = new NexacroResult();
		
		Integer log = loginService.login(vo);
		if(log >= 1) {
			result.addDataSet("loginInfo", vo);
		}
		
		return result;
	}
	
}
