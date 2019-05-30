var mas = [0,19,27,43,1,5,94,88,101];
var min;
var tmp;
var index;
for(var i = 0; i < mas.length; i++)
{
	min = mas[i];
	index = i;
	for(var j = i; j < mas.length; j++)
	{
		if(mas[j] < min)
		{
			min = mas[j];
			index = j;
		}
	}
	tmp = mas[i];
	mas[i] = mas[index];
	mas[index] = tmp;
}
console.log(mas);