/*
Node.js 에서 오라클과 연동해보자!
*/

// 변경할 목적의 데이터가 아니라면, 상수로 선언하자
// 이때 사용되는 키워드가 바로 let이다.
let conStr={
    user:"user09071",
    password:"1234",
    connectionString:"localhost/XE"
}; // 오라클에 접속할 때 필요한 정보

// 오라클을 접속하려면, 접속을 담당하는 모듈을 사용해야 한다.
// 우리가 node.js 를 설치하면 아주 기본적인 모듈만 내장되어 있기 때문에,
// 개발에 필요한 모듈을 그때 그때 다운로드 받아 설치해야 한다.(이래서 node.js 가 인기있는것임)
var oracledb = require("oracledb");

// 오라클에 접속을 시도해 본다.
oracledb.getConnection(conStr, function(error, con){
    if(error){ // 실패하면..
        console.log("접속실패..", error);
    }else{
        console.log("접속성공");

        // 테이블에 데이터를 넣어보자!
        // 접속객체를 이용하여 insert 쿼리를 날려보자
        insert(con);
    }
});

function insert(con){
    var sql="insert  into  member2(member2_id, firstname,lastname,local,msg)";
    sql+=" values( seq_member2.nextval, 'yong','kim','house','say hi')";

    // 쿼리 실행
    con.execute(sql, function(error, result, fields){
        if(error){
            console.log("입력 실패");
        }else{
            console.log("입력성공");
        }
    });

    console.log("insert 할거임");
}