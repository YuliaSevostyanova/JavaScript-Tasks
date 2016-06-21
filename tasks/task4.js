/*
  The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line.
  Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.
  Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
  Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?
  Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.
*/
module.exports = function (queue) {
  var flag=false;
     var bills=[0,0,0]
     for(i=0;i<queue.length;i++)
     {
	flag=false;
	if(queue[i]==25) 
        {
	   bills[0]++;
	   flag=true;
	}
	if(queue[i]==50 && bills[0]>0) 
	{
	    bills[0]--;
	    bills[1]++;
	    flag=true;
	}
	if(queue[i]==100)
	{
	    if (bills[1]>0 && bills[0]>0)
	    {
		bills[1]--;
		bills[0]--;
  		bills[2]++;
		flag=true
	    }
	    if (bills[0]>2)
	    {
		bills[0]=bills[0]-3;
  		bills[2]++;
		flag=true
	    }
	}
        if(!flag)return "NO";
     }
     return "YES";
}
