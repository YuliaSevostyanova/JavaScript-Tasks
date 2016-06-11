/*
  Implement the function unique_in_order which takes as argument a sequence and returns a list of items without
  any elements with the same value next to each other and preserving the original order of elements.
*/
module.exports = function (input) {
  var output=[];
  var j=0;
  var lenInput=input.length;
  for (i = 0; i < lenInput-1; i++)
  {
	if(input[i]!=input[i+1])
	{
		output[j]=input[i];
		j++;
	}
  }
output[j]=input[lenInput-1];
return output;

}
