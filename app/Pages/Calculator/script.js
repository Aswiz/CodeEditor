var number1=0,
	number2=0,
	equal1,
	checkNumbers=-1,//===-1 - Ввод происходит в number1 
									//=== 1 - Ввод происходит в number2
	checkOperators;

	// Чиним баг, который нашел Препод
	var checkPressedOperationButton=-1;//false
	// Чиним баг, который нашел Препод

function input(number) 
{
	document.getElementById('inputNumber').value+=number;
	if (checkNumbers===-1) 
	{
		number1=document.getElementById('inputNumber').value;
		console.log("number1 = "+number1);
	}
	else if(checkNumbers===1)
	{
		number2=document.getElementById('inputNumber').value;
		console.log("number2 = "+number2);
	}


}
function clearNumber() 
{
	document.getElementById('inputNumber').value='';
	document.getElementById('inputNumber2').value='';

}
function operations(value)
{
	if (value==='±') 
	{
		number1*=-1;
		document.getElementById('inputNumber').value=number1;
	}
	else if (value === '%') 
	{
		number1*=0.01;
		document.getElementById('inputNumber').value=number1;
	}
}
function on_pushButton_dot_clicked()
{
	var str = document.getElementById('inputNumber').value+'';
	var check=-1;
	//alert( str.length ) // true
	for(var i=0;i<str.length;i++)
	{
		if (str[i]==='.') 
		{
			check=1;
		}
	}
	if (check===1) 
	{
		console.log("Errorrr");

	}
	else
	{
		if (str.length===0) 
		{
			document.getElementById('inputNumber').value+='0.';
		}
		else
		{
			document.getElementById('inputNumber').value+='.';
		}

	}
}
function math_operations(operator)
{
	checkNumbers=1;
	checkOperators=operator;
	document.getElementById('inputNumber').value='';
	document.getElementById('inputNumber2').value=number1+' '+operator+' ';

}
function equal1()
{
	var a=Number(number1);
	var b=Number(number2);
	var c=Number(equal1);
	document.getElementById('inputNumber2').value+=document.getElementById('inputNumber').value;
	document.getElementById('inputNumber').value='';
	if (checkOperators==='+') 
	{
		c=a+b;
		// console.log("c = "+c);
		document.getElementById('inputNumber').value=c;
		document.getElementById('inputNumber2').value='';
		

		console.log("\nnumber1 = "+number1);
		console.log("number2 = "+number2);
		console.log(a+'+'+b+'='+c);

		number1=c;
		number2=0;

		console.log("number1 = "+number1);
		console.log("number2 = "+number2);
	}

	if (checkOperators==='-') 
	{
		c=a-b;
		// console.log("c = "+c);
		document.getElementById('inputNumber').value=c;
		document.getElementById('inputNumber2').value='';
		

		console.log("\nnumber1 = "+number1);
		console.log("number2 = "+number2);
		console.log(a+'-'+b+'='+c);

		number1=c;
		number2=0;

		console.log("number1 = "+number1);
		console.log("number2 = "+number2);
	}
	if (checkOperators==='÷') 
	{
		if (b===0) 
			c=0;
		else
		c=a/b;
		if (+c%2!==0) 
		{
			c=c.toFixed(5);
		}
		// console.log("c = "+c);
		document.getElementById('inputNumber').value=c;
		document.getElementById('inputNumber2').value='';
		

		console.log("\nnumber1 = "+number1);
		console.log("number2 = "+number2);
		console.log(a+'/'+b+'='+c);

		number1=c;
		number2=0;

		console.log("number1 = "+number1);
		console.log("number2 = "+number2);
	}
	if (checkOperators==='x') 
	{
		c=a*b;
		// console.log("c = "+c);
		document.getElementById('inputNumber').value=c;
		document.getElementById('inputNumber2').value='';
		

		console.log("\nnumber1 = "+number1);
		console.log("number2 = "+number2);
		console.log(a+'x'+b+'='+c);

		number1=c;
		number2=0;

		console.log("number1 = "+number1);
		console.log("number2 = "+number2);
	}
	checkNumbers=-1;

}