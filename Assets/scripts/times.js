#pragma strict
import UnityEngine.UI;

var timerText :Text;
var timeLeft:float=30f;

function Start (){
	timerText = GetComponent(Text);
}

function Update () {
	if(timeLeft<0){
		GameObject.Find("spawner").GetComponent(spawner).stop = true;
		 //Debug.Log("Time Out!");
	 }
	else{
	timeLeft-=Time.deltaTime;
	timerText.text= Mathf.RoundToInt(timeLeft).ToString();
	//guiText.text="Time\n"+Mathf.RoundToInt(timeLeft).ToString();
	}
}