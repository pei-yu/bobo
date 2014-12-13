#pragma strict

private var anim:Animator;
private var box:BoxCollider2D;

function Start () {
	anim=GetComponent(Animator);
	box=GetComponent(BoxCollider2D);	
	
	rigidbody2D.velocity= new Vector2(0,-5);//(0,Random.Range(-1,-5)
}

function Die () {
	box.enabled=false;
	anim.SetTrigger("die");
}
function killobj(){
	Destroy(gameObject);
	}
function OnTriggerEnter2D(other:Collider2D){
	if(other.tag=="Wall"){
		killobj();
	}
}