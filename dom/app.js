// ¿En tu páis de origen es normal dejar propina?
// Si, pero normalmente 10-15% sobre el total de la cuenta y se pregunta al cliente cuánta propina desea dar.

const btn = document.getElementById('calculate');
const billAmount = document.getElementById('bill-amount');
const percentageTip = document.getElementById('percentage-tip');
const tipAmount = document.getElementById('tip-amount');
const total = document.getElementById('total');

btn.addEventListener('click', () => {
	const bill = Number(billAmount.value);
	const tip = Number(percentageTip.value);
	const tipAmountValue = bill * (tip / 100);
	const totalValue = bill + tipAmountValue;
	tipAmount.value = tipAmountValue.toFixed(2);
	total.value = totalValue.toFixed(2);
});
