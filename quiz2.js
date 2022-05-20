// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10,000원
// 파트타임 직원은 시간당 8,000원

class 직원{
  constructor(name, department, workHours, pay){
    this.name = name;
    this.department = department;
    this.workHours = workHours;
    this.pay = pay;
  }

  calculate(){
    console.log(`${this.name}의 한달 월급 ${this.workHours * this.pay}은 입니다.`);
  }
}

class 정직원 extends 직원 {
  constructor(name, department, workHours, pay){
    super(name, department, workHours);
    this.pay = 10000;
  }
}

class 파트타임직원 extends 직원 {
  constructor(name, department, workHours, pay){
    super(name, department, workHours);
    this.pay = 8000;
  }
}

const worker = new 정직원('오한솔', '프론트엔드', 10);
const partTimer = new 파트타임직원('잉비', '야옹이부서', 10);


worker.calculate();
partTimer.calculate();