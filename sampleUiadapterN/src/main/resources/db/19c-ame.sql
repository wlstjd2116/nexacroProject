-- �����׸� ���̺�
create table TB_inspectionItem(
    inspectionId varchar2 (50) primary key,
    inspectionItem varchar2 (100)
);

drop table tb_inspectionItem CASCADE CONSTRAINTS;

-- �з��ڵ� ���̺�
create table TB_class (
    classcode number(8) primary key,
    classname varchar2(30),

    cl_inspectionid varchar2(50),
    CONSTRAINT fk_cl_inspectionid FOREIGN KEY(cl_inspectionid) references TB_inspectionItem(inspectionId) on delete CASCADE
);

drop table tb_class;

-- �����ڵ� ���̺�
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

-- �ڻ걸�� ���̺�
create table TB_asset(
    assetDivision varchar2(6) primary key,
    assetName varchar2(50)
);

DROP TABLE TB_ASSET CASCADE CONSTRAINTS;

-- �ڻ걸�� ���̺� ������ ����
insert into tb_asset values ('ALL', '��ü');
insert into tb_asset values ('JS1100', '�ܱ�Ÿ�');
insert into tb_asset values ('JS2100', '�ŵ�����(����)');
insert into tb_asset values ('JS3100', '���⺸��(����)');
insert into tb_asset values ('JS2200', '�ŵ�����(������)');
insert into tb_asset values ('JS3200', '���⺸��(������)');

commit;

select * from tb_asset;



-- �з��ڵ� ������ ����

insert into tb_inspectionitem (inspectionid, inspectionitem) values ('test1','testitem');


insert into tb_class values (11110000, '�ܱ�Ÿ�(ä��)', '1');
insert into tb_class values (11120000, '�ܱ�Ÿ�(�ֽ�)', '1');
insert into tb_class values (11130000, '�ܱ�Ÿ�(�Ļ���ǰ)', '1');
insert into tb_class values (11990000, '�ܱ�Ÿ�(�ջ�)', '1');
insert into tb_class values (21110000, '�ŵ�����(ä��)', '1');
insert into tb_class values (21120000, '�ŵ�����(�ֽ�)', '1');
insert into tb_class values (21130000, '�ŵ�����(�Ļ���ǰ)', '5');
insert into tb_class values (21990000, '�ŵ�����(�ջ�)', '1');
insert into tb_class values (22110000, '���⺸��(ä��)', '1');
insert into tb_class values (22130000, '���⺸��(�Ļ���ǰ)', '1');

commit;

alter table tb_account modify ac_classcode NUMBER(8);
commit;
update tb_account set AC_CLASSCODE = 11120000 where AC_CLASSCODE is null;




SELECT * 
FROM TB_CLASS;

-- �ѵ� �����׸� ���� ������
insert into tb_inspectionitem values (1, '�ڻ������� ����ѵ�');
insert into tb_inspectionitem values (2, '�������� ������ ����ѵ�');
insert into tb_inspectionitem values (3, 'ä�� ���ǻ纰 �������� ����ѵ�(ä��)');
insert into tb_inspectionitem values (4, '(��) ä�� ���ǻ纰 ����ѵ� ����(20)% �̳�');
insert into tb_inspectionitem values (5, '(��) ä�� ���ǻ纰 ����ѵ� ����(15)% �̳�');
insert into tb_inspectionitem values (6, '������ ����ѵ�');
insert into tb_inspectionitem values (7, '(��) ������ �ܱ�Ÿ� �ֽ�ä�� ����ѵ�');
insert into tb_inspectionitem values (8, '(��) ������ Vak ����ѵ�');

-- �����ڵ� ������ ����
insert into tb_account (accountcode, accountname, ac_product, ac_productname, ac_assetdivision) values('111301011', '(��)�ֽ�(����)', 'GJ1111', '�ŷ���', 'JS1100');
insert into tb_account (accountcode, accountname, ac_product, ac_productname, ac_assetdivision) values('111302011', '(��)�ֽ�(����)', 'GJ1111', '�ŷ���_(��ü����)', 'JS2100');
insert into tb_account (accountcode, accountname, ac_product, ac_productname, ac_assetdivision) values('111302011', '(��)�ֽ�(����)', 'GJ1112', '�ڽ���', 'JS2100');
insert into tb_account (accountcode, accountname, ac_product, ac_productname, ac_assetdivision) values('111301011', '(��)�ֽ�(����)', 'GJ1121', '��ü����(�ǹ��ڻ�)', 'JS1100');
insert into tb_account (accountcode, accountname, ac_product, ac_productname, ac_assetdivision) values('111301011', '(��)�ֽ�(����)', 'GJ1131', '��3����','JS1100');
insert into tb_account (accountcode, accountname, ac_product, ac_productname, ac_assetdivision) values('111302011', '(��)�ֽ�(����)', 'GJ1131', '��3����','JS2100');
insert into tb_account (accountcode, accountname, ac_product, ac_productname, ac_assetdivision) values('111302012', '(��)�ֽ�(�����)', 'GJ1211', '��ü����(�ǹ��ڻ�)', 'JS2100');
insert into tb_account (accountcode, accountname, ac_product, ac_productname, ac_assetdivision) values('111302012', '(��)�ֽ�(�����)', 'GJ1221', '��ܽ���', 'JS2100');
insert into tb_account (accountcode, accountname, ac_product, ac_productname, ac_assetdivision) values('111302012', '(��)�ֽ�(�����)', 'GJ1241', '��ü����(MnA)', 'JS2100');


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
-- �ȵ�..
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

-- �ȵ�.. 
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

-- �ȵ�
UPDATE (SELECT ROWNUM RN,ACC.* FROM TB_ACCOUNT ACC) TE
SET TE.AC_CLASSCODE = 11130000
WHERE TE.RN IN (1,3);

          SELECT rownum rn , A.*
FROM (	SELECT AC.*, ASET.ASSETNAME
		FROM TB_ASSET ASET, TB_ACCOUNT AC
		WHERE ASET.ASSETDIVISION = AC.AC_ASSETDIVISION) A;

