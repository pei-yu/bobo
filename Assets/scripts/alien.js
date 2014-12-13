#pragma strict
var audioClips:AudioClip[];
var score : int = 0;

function Start () {
	// set position to (0,0) when begin
	transform.position.x = 0;
	transform.position.y = 0;
}

function Update () {

	var speed : float = 0.5f;

	if(Input.GetKey(KeyCode.UpArrow)) {
		if(transform.position.y<10)transform.position.y += speed;
	}
	if(Input.GetKey(KeyCode.DownArrow)) {
		if(transform.position.y>-10)transform.position.y -= speed;
	}
	if(Input.GetKey(KeyCode.LeftArrow)) {
		transform.localScale.x = -1;
		if(transform.position.x>-15)transform.position.x -= speed;
	}
	if(Input.GetKey(KeyCode.RightArrow)) {
		transform.localScale.x = 1;
		if(transform.position.x<15)transform.position.x += speed;
	}
	rigidbody2D.velocity= new Vector2(0,0);
}

function OnCollisionEnter2D (coll : Collision2D) {
	if(coll.collider.name == "enemy") {
		score ++;
		audio.pitch=1;
		audio.clip=audioClips[0];
		coll.collider.SendMessage("Die");
	}
	else if(coll.collider.name == "enemy2") {
		score += 2;
		audio.pitch=0.5;
		audio.clip=audioClips[0];
		coll.collider.SendMessage("Die");
	}
	else if(coll.collider.name == "enemy3") {
		score -= 5;
		audio.pitch=1;
		audio.clip=audioClips[1];
		coll.collider.SendMessage("Die");
	}
	audio.Play();
	GameObject.Find("score").GetComponent(Text).text= score.ToString(); // update score
}