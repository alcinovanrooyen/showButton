// Show/Hide customize button
const ppButton = jQuery('#pp_customize_design_btn');
ppButton.hide();

const itemsToTrack = jQuery('#product > div.form-group.required > select');

function checkMustShowOrNot()
{
	let shouldShow = true;
	itemsToTrack.each((k, el) =>
	{
		if (!el.selectedIndex)
			shouldShow = false;
	});
	console.log(shouldShow);
	if (shouldShow) ppButton.show();
	else ppButton.hide();
}

itemsToTrack.each((_,el)=>el.addEventListener('change', checkMustShowOrNot));