var nowPathURL = String(window.location.pathname);
var jumpHeadURL = 'https://zichenstudio.netlify.app';
if (nowPathURL != '/0107') {
	jumpAllURL = String(jumpHeadURL + nowPathURL);
	function jump() {
		var jumpText = '<h1>测试: 正常</h1><br><p>即将跳转: <a href="' + jumpAllURL + '">' + jumpAllURL +
			'</a></p><p>如果浏览器没有自动跳转，请自行点击上方链接跳转。</p>'
		$('#body').html(jumpText);
		window.location.replace(jumpAllURL);
	};
	setTimeout('jump()', 5000);
};
