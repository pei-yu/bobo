#pragma strict

function Start () {//begin
	transform.position.x=0;
	transform.position.y=0;
	
}

function Update () {
	transform.position.x+=0.01;
	transform.position.y+=0.01;
}