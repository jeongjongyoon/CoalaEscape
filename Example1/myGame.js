﻿room = game.createRoom("room", "배경-1.png") // 방 생성

room.door = room.createObject("door", "문-오른쪽-닫힘.png") // 문 생성
room.door.setWidth(136) // 크기 조절
room.locateObject(room.door, 1049, 300) // 문 배치
room.door.lock() // door 상태를 locked로 변경

room.door.onClick = function() { // door를 클릭했을 때
	if(room.door.isClosed()){ // door가 closed 상태이면
		room.door.open() // door의 상태를 open으로 바꿈
	} else if (room.door.isOpened()){ // door가 opened 상태이면
		game.clear() // 게임 클리어
	} else if (room.door.isLocked()){ // door가 locked 상태이면
		printMessage("문이 잠겨있다") // 메시지 출력
	}
}

room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.door.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}

room.keypad = room.createObject("keypad", "숫자키-우.png") // 오브젝트 생성
room.keypad.setWidth(50) // 크기 조절
room.locateObject(room.keypad, 930, 250) // 위치 변경

room.keypad.onClick = function() {
	printMessage("비밀번호는 몇일까요?")
	showKeypad("number", "9566" , function(){ // 키패드 1 - 숫자4자리
		room.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

room.shelf = room.createObject("shelf", "선반-좌.png")
room.shelf.setWidth(460)
room.locateObject(room.shelf, 250, 150)

room.book = room.createObject("book", "책3-1.png")
room.book.setWidth(80)
room.locateObject(room.book, 100, 140)
room.book.onClick = function() {
	showImageViewer("종이.png", "메시지.txt"); // 이미지 출력
}

room.table = room.createObject("table", "테이블-우.png") // 테이블 생성
room.table.setWidth(300)
room.locateObject(room.table, 550, 400)

room.mac = room.createObject("mac", "맥-우.png") // 맥 생성
room.mac.setWidth(130)
room.locateObject(room.mac, 560, 270)
room.mac.onClick = function() {
	 showImageViewer("5번.png", "")  //2번째 글자에 대한 힌트
}

room.phone = room.createObject("phone", "전화기-오른쪽.png")
room.phone.setWidth(30)
room.locateObject(room.phone, 830, 250)
room.phone.onClick = function() {
	playSound("firstletter.wav") // 오디오 재생(1번째 글자에 대한 힌트)
}

room.sixtable = room.createObject("sixtable", "6인테이블-오른쪽.png")
room.sixtable.setWidth(600)
room.locateObject(room.sixtable, 900, 600)
room.sixtable.onClick = function() {
	printMessage("의자의 개수를 살펴보세요") - 3번째 글자에 대한 힌트
}


room.sofa = room.createObject("sofa","소파2-1.png")
room.sofa.setWidth(300)
room.locateObject(room.sofa, 170,400)
room.sofa.onClick = function() {
	printMessage("종이가 떨어져있다.")
	showImageViewer("종이.png", "4번째수.txt"); //4번째 글자에 대한 힌트
}

room.TV = room.createObject("TV","TV-오른쪽.png")
room.TV.setWidth(150)
room.locateObject(room.TV, 700,100)
room.TV.onClick = function() {
	printMessage("TV는 꺼져 있다.")
}

game.start(room) // 게임시작
printMessage("방탈출에 오신 것을 환영합니다! 책을 클릭해보세요!") // 환영 메시지 출력