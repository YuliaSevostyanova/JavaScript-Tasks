/*
  Longest Palindrome
  Find the length of the longest substring in the given string s that is the same in reverse.
  As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
  If the length of the input string is 0, return value must be 0.
*/
module.exports = function (str) {


 function f(str)
{
  if(str.length==0)
    {return 0}
  else return findLongestPalindrome(str).length

}

function findLongestPalindrome(s)
{
  var s2=addBoundaries(s);

  var p=[];
  var c = 0, r = 0; 
  var m = 0, n = 0; 
  for (i = 1; i < s2.length; i++)
   {
                    if (i > r)
                    {
                        p[i] = 0; m = i - 1; n = i + 1;
                    }
                    else
                    {
                        var i2 = c * 2 - i;
                        if (p[i2] < (r - i))
                        {
                            p[i] = p[i2];
                            m =m -1; 
                        }
                        else
                        {
                            p[i] = r - i;
                            n = r + 1; m = i * 2 - n;
                        }
                    }
                    while (m >= 0 && n < s2.length && s2.charAt(m) == s2.charAt(n))
                    {
                        p[i]++; m--; n++;
                    }
                    if ((i + p[i]) > r)
                    {
                        c = i; r = i + p[i];
                    }
    }
    var len = 0; c = 0;
    for (i = 1; i < s2.length; i++)
    {
       if (len < p[i])
        {
          len = p[i]; c = i;
        }
    }

    var ss =s2.slice(c-len, c+len+1);
    return (removeBoundaries(ss));
}

function addBoundaries(cs)
{
  if (cs == null || cs.length == 0)
       return "||";

  var cs2='';
  var cs2Len=cs.length * 2 + 1;
  
  for (i = 0; i < cs2Len - 1; i = i + 2)
       {
         cs2 = cs2+'|';
         cs2 = cs2+cs.charAt(i / 2);
       }
   cs2=cs2+ '|';
   return cs2;
}

function removeBoundaries(cs)
{
 if (cs == null || cs.length < 3)
    return "";

var cs2Len=(cs.length - 1) / 2
  var cs2='';
   for ( i = 0; i < cs2Len; i++)
   {
     cs2 = cs2+cs.charAt(i * 2 + 1);
    }
  return cs2;
}
 
 f(str);
}
