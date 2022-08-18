// 정직원과 파트타입직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보 : 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트 타임 직원은 시간당 8000원

class Employee {
  constructor(name, depart, hoursPerMonth, payRate) {
    this.name = name;
    this.depart = depart;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }

  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FulltimeEmployee extends Employee {
  static #PAY_RATE = 10000; // 아래 super에 직접적으로 숫자를 적는 것 보다는 상수 변수를 이용해서 의미를 부여하는 것이 옳다
  constructor(name, depart, hoursPerMonth) {
    super(name, depart, hoursPerMonth, FulltimeEmployee.#PAY_RATE); // 여기에 직접 숫자를 적는 건 비효율적이야. 이 숫자가 뭘 의미하는지 거슬러 올라가야하거든
    // this로 사용하면 오류난다. static은 클래스레벨이기 때문인가?
  }
}

class PartTimeEmployee extends Employee {
  static #PAY_RATE = 8000;

  constructor(name, depart, hoursPerMonth) {
    super(name, depart, hoursPerMonth, PartTimeEmployee.#PAY_RATE);
  }
}

const ellie = new FulltimeEmployee("엘리", "소프트웨어부서", 30);
const bob = new PartTimeEmployee("밥", "하드웨어부서", 20);
console.log(ellie.calculatePay());
console.log(bob.calculatePay());

// static 프로퍼티의 경우 클래스 레벨에서만 사용할 때 활용,
// private 의 경우 외부에서 접근 불가능하게 할 때 라고 하셨는데

// class Worker {
//   constructor(name, department, workTime) {
//     this.name = name;
//     this.department = department;
//     this.workTime = workTime;
//   }

//   // get name() {
//   //   return this.#name;
//   // }

//   // get getDepartment() {
//   //   return this.#department;
//   // }

//   // get getWorkTime() {
//   //   return this.#workTime;
//   // }

//   get getMonthSalary() {
//     return workTime;
//   }
// }

// class Regular extends Worker {
//   constructor(name, department, workTime) {
//     super(name, department, workTime);
//     this.salary = 10000;
//   }

//   get getMonthSalary() {
//     return this.workTime * this.salary;
//   }
// }

// class PartTime extends Worker {
//   constructor(name, department, workTime) {
//     super(name, department, workTime);
//     this.salary = 8000;
//   }

//   get getMonthSalary() {
//     return this.workTime * this.salary;
//   }
// }

// const regular = new Regular("정직원", "정직원부서", 50);
// const partTime = new PartTime("파트타이머", "파트타임부서", 30);

// console.log(regular.getMonthSalary);
// console.log(partTime.getMonthSalary);
