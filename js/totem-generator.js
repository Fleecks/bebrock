var imagefile

var dataURL
var c = document.getElementById("canvas")
var ctx = c.getContext("2d")
c.style.display = "none"

var d = document.getElementById("totem")
var dtx = d.getContext("2d")
d.width = 16
d.height = 16

var imageLoader = document.getElementById("imageLoader")
imageLoader.addEventListener("change", handleImage, false)

function handleImage(e) {
	if (e == "true") {
		var img = new Image()
		img.onload = function () {
			c.width = img.width
			c.height = img.height
			ctx.drawImage(img, 0, 0)
			c.style.display = "none"
		}
	} else {
		var reader = new FileReader()
		reader.onload = function (event) {
			var img = new Image()
			img.onload = function () {
				c.width = img.width
				c.height = img.height
				ctx.drawImage(img, 0, 0)
				test(img)
				c.style.display = "none"
			}
			img.src = event.target.result
			
			$('.totem-generator-footer').show()
			$('.totem-generator-footer').css('opacity','1')
			$('.file-upload').css('height','55px')
			$('.file-upload span').text('Вибрати інший скін')
			$('#totem').css('transform', 'scale(1)')
		}
		reader.readAsDataURL(e.target.files[0])
	}
}

function test(img) {
	if (img == "overlay") {
		var img = imagefile
	} else {
		var img = img
		imagefile = img
	}
	//head
	dtx.clearRect(0, 0, 16, 16)
	dtx.drawImage(c, 8, 8, 8, 8, 4, 1, 8, 8)
	dtx.clearRect(4, 1, 1, 1)
	dtx.clearRect(11, 1, 1, 1)
	
	//body
	dtx.drawImage(c, 20, 21, 8, 1, 4, 9, 8, 1)
	dtx.drawImage(c, 20, 23, 8, 1, 4, 10, 8, 1)
	dtx.drawImage(c, 20, 29, 8, 1, 4, 11, 8, 1)
	dtx.drawImage(c, 20, 31, 8, 1, 4, 12, 8, 1)

	//left leg (right)
	dtx.drawImage(c, 5, 20, 3, 2, 5, 13, 3, 2)
	dtx.drawImage(c, 6, 31, 2, 1, 6, 15, 2, 1)
	
	//right leg (left)
	if (img.height > 32) {
		dtx.drawImage(c, 20, 52, 3, 2, 8, 13, 3, 2)
		dtx.drawImage(c, 20, 63, 2, 1, 8, 15, 2, 1)
	} else {
		dtx.drawImage(c, 7, 20, 3, 2, 8, 13, 3, 2)
		dtx.drawImage(c, 7, 31, 2, 1, 8, 15, 2, 1)
	}
	
	//left arm (right)
	dtx.drawImage(c, 44, 20, 1, 1, 3, 8, 1, 1)
	dtx.drawImage(c, 45, 20, 1, 1, 3, 9, 1, 1)
	dtx.drawImage(c, 46, 20, 1, 1, 3, 10, 1, 1)
	dtx.drawImage(c, 44, 21, 1, 1, 2, 8, 1, 1)
	dtx.drawImage(c, 45, 21, 1, 1, 2, 9, 1, 1)
	dtx.drawImage(c, 46, 21, 1, 1, 2, 10, 1, 1)
	dtx.drawImage(c, 44, 31, 1, 1, 1, 8, 1, 1)
	dtx.drawImage(c, 45, 31, 1, 1, 1, 9, 1, 1)

	//right arm (left)
	if (img.height > 32) {
		dtx.drawImage(c, 39, 52, 1, 1, 12, 8, 1, 1)
		dtx.drawImage(c, 38, 52, 1, 1, 12, 9, 1, 1)
		dtx.drawImage(c, 37, 52, 1, 1, 12, 10, 1, 1)
		dtx.drawImage(c, 39, 53, 1, 1, 13, 8, 1, 1)
		dtx.drawImage(c, 38, 53, 1, 1, 13, 9, 1, 1)
		dtx.drawImage(c, 37, 53, 1, 1, 13, 10, 1, 1)
		dtx.drawImage(c, 37, 63, 1, 1, 14, 8, 1, 1)
		dtx.drawImage(c, 38, 63, 1, 1, 14, 9, 1, 1)
	} else {
		dtx.drawImage(c, 44, 20, 1, 1, 12, 8, 1, 1)
		dtx.drawImage(c, 45, 20, 1, 1, 12, 9, 1, 1)
		dtx.drawImage(c, 46, 20, 1, 1, 12, 10, 1, 1)
		dtx.drawImage(c, 44, 21, 1, 1, 13, 8, 1, 1)
		dtx.drawImage(c, 45, 21, 1, 1, 13, 9, 1, 1)
		dtx.drawImage(c, 46, 21, 1, 1, 13, 10, 1, 1)
		dtx.drawImage(c, 46, 31, 1, 1, 14, 8, 1, 1)
		dtx.drawImage(c, 45, 31, 1, 1, 14, 9, 1, 1)
	}

	//2 layer
	if (img.height > 32){
		dtx.drawImage(c, 44, 36, 1, 1, 3, 8, 1, 1)
		dtx.drawImage(c, 45, 36, 1, 1, 3, 9, 1, 1)
		dtx.drawImage(c, 46, 36, 1, 1, 3, 10, 1, 1)
		dtx.drawImage(c, 44, 37, 1, 1, 2, 8, 1, 1)
		dtx.drawImage(c, 45, 37, 1, 1, 2, 9, 1, 1)
		dtx.drawImage(c, 46, 37, 1, 1, 2, 10, 1, 1)
		dtx.drawImage(c, 44, 47, 1, 1, 1, 8, 1, 1)
		dtx.drawImage(c, 45, 47, 1, 1, 1, 9, 1, 1)

		dtx.drawImage(c, 55, 52, 1, 1, 12, 8, 1, 1)
		dtx.drawImage(c, 54, 52, 1, 1, 12, 9, 1, 1)
		dtx.drawImage(c, 53, 52, 1, 1, 12, 10, 1, 1)
		dtx.drawImage(c, 55, 53, 1, 1, 13, 8, 1, 1)
		dtx.drawImage(c, 54, 53, 1, 1, 13, 9, 1, 1)
		dtx.drawImage(c, 53, 53, 1, 1, 13, 10, 1, 1)
		dtx.drawImage(c, 53, 63, 1, 1, 14, 8, 1, 1)
		dtx.drawImage(c, 54, 63, 1, 1, 14, 9, 1, 1)

		dtx.drawImage(c, 20, 37, 8, 1, 4, 9, 8, 1)
		dtx.drawImage(c, 20, 39, 8, 1, 4, 10, 8, 1)
		dtx.drawImage(c, 20, 45, 8, 1, 4, 11, 8, 1)
		dtx.drawImage(c, 20, 47, 8, 1, 4, 12, 8, 1)

		dtx.drawImage(c, 5, 36, 3, 2, 5, 13, 3, 2)
	    dtx.drawImage(c, 6, 47, 2, 1, 6, 15, 2, 1)
	    dtx.drawImage(c, 4, 52, 3, 2, 8, 13, 3, 2)
		dtx.drawImage(c, 4, 63, 2, 1, 8, 15, 2, 1)
		dtx.drawImage(c, 40, 8, 8, 8, 4, 1, 8, 8)
	}
	
	dataURL = d.toDataURL()
	document.getElementById("canvasImg").src = dataURL
	d.style.display = "none"
}

function uuidv4() {
	return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
		(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
	)
}

function showModal(){
	$('.modal').css({"transform":"translate(-50%, -50%) scale(1)","opacity": "1"})
	$('.modal-back-layer').show()
	$('.modal-back-layer').css('backdrop-filter', 'blur(4px)')
}
function hideModal(){
	$('.modal').css({"transform":"translate(-50%, -50%) scale(0)","opacity": "0"})
	$('.modal-back-layer').hide()
	$('.modal-back-layer').css('backdrop-filter', 'blur(0px)')
}

document.addEventListener('click', function(e){
	if(e.target.id=='save-modal') showModal()
	if(e.target.className=='modal-back-layer') hideModal()
	if(e.target.id=='save'){
		hideModal()
		
		let packName = document.querySelector('#packName').value
		if(packName==null||packName=="") packName = 'Custom totem'
			
		const manifest = {
			format_version: 2,
			header: {
				description: "§o§7Created with Bebrock.ML",
				name: "§l"+packName[0].toUpperCase()+packName.slice(1),
				uuid: uuidv4(),
				version: [0, 0, 1],
				min_engine_version: [1, 14, 0]
			},
			modules: [
				{
					type: "resources",
					uuid: uuidv4(),
					version: [0, 0, 1]
				}
			]
		}

		const pack = new JSZip()
		
		pack.file("manifest.json", JSON.stringify(manifest, null, '\t'))
		pack.file("pack_icon.png", d.toDataURL("image/png").split('base64,')[1], {base64: true})
		
		pack.file("textures/items/totem.png", d.toDataURL("image/png").split('base64,')[1], {base64: true})
		
		pack.generateAsync({type:"blob"}).then(function(content) {
			saveAs(content, packName+".mcpack")
		})
	}
})