-- 점검항목 테이블
create table TB_inspectionItem(
    inspectionId varchar2 (50) primary key,
    inspectionItem varchar2 (100)
);

drop table tb_inspectionItem CASCADE CONSTRAINTS;

-- 분류코드 테이블
create table TB_class (
    classcode number(8) primary key,
    classname varchar2(30),

    cl_inspectionid varchar2(50),
    CONSTRAINT fk_cl_inspectionid FOREIGN KEY(cl_inspectionid) references TB_inspectionItem(inspectionId) on delete CASCADE
);

drop table tb_class;

-- 계정코드 테이블
create table TB_account (
    accountcode number(9) not null,
    accountname varchar2(30),
    ac_product varchar2(50) not null,
    ac_productName varchar2(50),
    
    CONSTRAINT account_pk primary key(accountcode, ac_product),
    
    ac_assetdivision varchar2(6),
    CONSTRAINT fk_ac_asset_class foreign key(ac_assetdivision) REFERENCES TB_asset(assetdivision) on delete CASCADE,
    
    ac_classcode number,
    CONSTRAINT fk_ac_classcode foreign key(ac_classcode) references TB_class(classcode) on delete CASCADE
);

drop table TB_account;

-- 자산구분 테이블
create table TB_asset(
    assetDivision varchar2(6) primary key,
    assetName varchar2(50)
);

DROP TABLE TB_ASSET CASCADE CONSTRAINTS;

-- 자산구분 테이블 데이터 더미
insert into tb_asset values ('ALL', '전체');
insert into tb_asset values ('JS1100', '단기매매');
insert into tb_asset values ('JS2100', '매도가능(유동)');
insert into tb_asset values ('JS3100', '만기보유(유동)');
insert into tb_asset values ('JS2200', '매도가능(비유동)');
insert into tb_asset values ('JS3200', '만기보유(비유동)');

commit;

select * from tb_asset;



-- 분류코드 데이터 더미

insert into tb_inspectionitem (inspectionid, inspectionitem) values ('test1','testitem');


insert into tb_class values (11110000, '단기매매(채권)', '1');
insert into tb_class values (11120000, '단기매매(주식)', '1');
insert into tb_class values (11130000, '단기매매(파생상품)', '1');
insert into tb_class values (11990000, '단기매매(합산)', '1');
insert into tb_class values (21110000, '매도가능(채권)', '1');
insert into tb_class values (21120000, '매도가능(주식)', '1');
insert into tb_class values (21130000, '매도가능(파생상품)', '5');
insert into tb_class values (21990000, '매도가능(합산)', '1');
insert into tb_class values (22110000, '만기보유(채권)', '1');
insert into tb_class values (22130000, '만기보유(파생상품)', '1');

commit;

alter table tb_account modify ac_classcode NUMBER(8);
commit;
update tb_account set AC_CLASSCODE = 11120000 where AC_CLASSCODE is null;




SELECT * 
FROM TB_CLASS;

-- 한도 점검항목 더미 데이터
insert into tb_inspectionitem values (1, '자산종류별 운용한도');
insert into tb_inspectionitem values (2, '유가증권 종류별 운용한도');
insert into tb_inspectionitem values (3, '채권 증권사별 유가증권 운용한도(채권)');
insert into tb_inspectionitem values (4, '(가) 채권 증권사별 운용한도 월간(20)% 이내');
insert into tb_inspectionitem values (5, '(나) 채권 증권사별 운용한도 월간(15)% 이내');
insert into tb_inspectionitem values (6, '딜러별 운용한도');
insert into tb_inspectionitem values (7, '(가) 딜러별 단기매매 주식채권 운용한도');
insert into tb_inspectionitem values (8, '(나) 딜러별 Vak 운용한도');

-- 계정코드 데이터 더미
insert into tb_account (accountcode, accountname, ac_product, ac_productname, ac_assetdivision) values('111301011', '(가)주식(상장)', 'GJ1111', '거래소', 'JS1100');
insert into tb_account (accountcode, accountname, ac_product, ac_productname, ac_assetdivision) values('111302011', '(가)주식(상장)', 'GJ1111', '거래소_(대체투자)', 'JS2100');
insert into tb_account (accountcode, accountname, ac_product, ac_productname, ac_assetdivision) values('111302011', '(가)주식(상장)', 'GJ1112', '코스닥', 'JS2100');
insert into tb_account (accountcode, accountname, ac_product, ac_productname, ac_assetdivision) values('111301011', '(가)주식(상장)', 'GJ1121', '대체투자(실물자산)', 'JS1100');
insert into tb_account (accountcode, accountname, ac_product, ac_productname, ac_assetdivision) values('111301011', '(가)주식(상장)', 'GJ1131', '제3시장','JS1100');
insert into tb_account (accountcode, accountname, ac_product, ac_productname, ac_assetdivision) values('111302011', '(가)주식(상장)', 'GJ1131', '제3시장','JS2100');
insert into tb_account (accountcode, accountname, ac_product, ac_productname, ac_assetdivision) values('111302012', '(나)주식(비상장)', 'GJ1211', '대체투자(실물자산)', 'JS2100');
insert into tb_account (accountcode, accountname, ac_product, ac_productname, ac_assetdivision) values('111302012', '(나)주식(비상장)', 'GJ1221', '장외시장', 'JS2100');
insert into tb_account (accountcode, accountname, ac_product, ac_productname, ac_assetdivision) values('111302012', '(나)주식(비상장)', 'GJ1241', '대체투자(MnA)', 'JS2100');


select ac.*, aset.assetname
from tb_account ac, tb_asset aset
where ac.ac_assetdivision = aset.assetdivision;

commit;
SELECT * FROM TB_ACCOUNT;

SELECT *       FROM TB_CLASS      WHERE 1=1 
AND CL_INSPECTIONID LIKE '%';

SELECT T.*, A.*
FROM (SELECT TT.*
     FROM (SELECT ROWNUM RN, A.* FROM TB_CLASS A) TT
     WHERE TT.RN = 1 )T , TB_ACCOUNT A
WHERE T.CLASSCODE = A.AC_CLASSCODE;

SELECT * 
FROM (	SELECT AC.*, ASET.ASSETNAME
        FROM TB_ACCOUNT AC, TB_ASSET ASET
        WHERE AC.AC_ASSETDIVISION = ASET.ASSETDIVISION)
WHERE AC_ASSETDIVISION = 'JS1100';

rollback;

alter table tb_account add chk number(1) default 0;
update tb_account set chk = 0 where chk = 'null';
commit;
select * from tb_account;


create table test1 (
    n varchar2(50),
    v varchar2(50)
);
drop table test1;

insert into test1 values('1', '2');

update test1 set n = '2' where v in (1, 2, 3);
UPDATE TB_ACCOUNT 
    	SET AC_CLASSCODE = 1112000
    	WHERE (
				SELECT rownum rn
		    	FROM (	SELECT AC.*, ASET.ASSETNAME
		    			FROM TB_ACCOUNT AC, TB_ASSET ASET
		    			WHERE AC.AC_ASSETDIVISION = ASET.ASSETDIVISION) TMP
		    	WHERE 1=1 
		    		AND AC_ASSETDIVISION = 'JS2100'
		    	) in (1,3);
                
          SELECT rownum rn , A.*
FROM (	SELECT AC.*, ASET.ASSETNAME
		FROM TB_ASSET ASET, TB_ACCOUNT AC
		WHERE ASET.ASSETDIVISION = AC.AC_ASSETDIVISION) A;      
-- 안됨..
update 
(SELECT rownum rn , A.*
FROM (	SELECT AC.*, ASET.ASSETNAME
		FROM TB_ASSET ASET, TB_ACCOUNT AC
		WHERE ASET.ASSETDIVISION = AC.AC_ASSETDIVISION) A
WHERE 1=1
AND AC_ASSETDIVISION = 'JS2100') AA
SET AA.AC_CLASSCODE = 11120000
WHERE RN = 1;

SELECT rownum rn , A.*
FROM (	SELECT AC.*, ASET.ASSETNAME
		FROM TB_ASSET ASET, TB_ACCOUNT AC
		WHERE ASET.ASSETDIVISION = AC.AC_ASSETDIVISION) A
WHERE 1=1
AND AC_ASSETDIVISION = 'JS2100';

-- 안됨.. 
MERGE INTO TB_ACCOUNT AA
USING (SELECT rownum rn , A.*
FROM (	SELECT AC.*, ASET.ASSETNAME
		FROM TB_ASSET ASET, TB_ACCOUNT AC
		WHERE ASET.ASSETDIVISION = AC.AC_ASSETDIVISION) A
WHERE 1=1
AND AC_ASSETDIVISION = 'JS2100') B
ON (AA.ACCOUNTCODE = B.ACCOUNTCODE)
WHEN MATCHED
THEN
UPDATE SET AA.AC_CLASSCODE = 11130000;

-- 안됨
UPDATE (SELECT ROWNUM RN,ACC.* FROM TB_ACCOUNT ACC) TE
SET TE.AC_CLASSCODE = 11130000
WHERE TE.RN IN (1,3);

          SELECT rownum rn , A.*
FROM (	SELECT AC.*, ASET.ASSETNAME
		FROM TB_ASSET ASET, TB_ACCOUNT AC
		WHERE ASET.ASSETDIVISION = AC.AC_ASSETDIVISION) A;

