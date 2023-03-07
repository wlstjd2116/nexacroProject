package sample.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.idgnr.EgovIdGnrService;
import sample.service.LoginService;
import sample.vo.LoginVO;

@Service("loginService")
public class LoginServiceImpl implements LoginService {
	
	@Resource(name = "egovIdGnrService")
	  private EgovIdGnrService egovIdGnrService;
	  
	  @Resource(name = "loginMapper")
	  private LoginMapper loginMapper;
	
	@Override
	public Integer login(LoginVO vo) throws Exception {
		return loginMapper.login(vo);
	}

}
