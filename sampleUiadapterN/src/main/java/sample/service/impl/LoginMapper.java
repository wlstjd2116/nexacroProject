package sample.service.impl;

import egovframework.rte.psl.dataaccess.mapper.Mapper;
import sample.vo.LoginVO;

@Mapper("loginMapper")
public interface LoginMapper {
	public Integer login(LoginVO vo) throws Exception;
}
