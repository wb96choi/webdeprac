##쌉가능

유형별로 3폴더 나눔
가로메뉴 연습 철저히하기

### 메뉴
- nav는 포지션과 너비값만
- nav .gnb에 너비 100%주고 flex로 li정렬(float:left효과)
- .gnb > li에 100%/li갯수(4)해서 25%주고 높이값 알맞게 설정, 위아래정렬은 lineheight로
    - .gnb li에 relative를 주어야 .sub의 포지션을 정할 수 있다.
- .gnb > li > a에 block줘서 li의 크기에 맞춤 (a태그는 inline속성이기 때문)
- .gnb > li > .sub에 너비값 100%, absolute줌 그리고 display none
- 자바스크립트는 이해하고 외울것 