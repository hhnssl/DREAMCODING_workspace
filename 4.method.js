const apple = {
  name: 'apple',
  display: function() {
    // 객체 안에서, 자기 자신의 속성에 접근할 때는 항상 this를 사용한다.
    console.log(`${this.name}: 사과 이모지`);
  },
};

apple.display();