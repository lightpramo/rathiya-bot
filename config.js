const fs = require('fs')
const chalk = require('chalk')


var ownernum = ['0','94712448370']

//Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
	devil: 'https://api-toxic-devil.herokuapp.com/api',
} 
 
global.APIKeys = {
	'https://zenzapis.xyz': '' }

   global.worktype = 'private'
   global.sudo = ['94712448370']
   global.owner = ['94712448370']
   global.packname = 'RATHI STICKERS ' 
   global.author = '๐ CHARITH SENANAYAKE ๐'
   global.linkbuttid1 = '๐ป ๐ฌโโโโโ๐ฎโโโโโ๐นโโโโโ๐ญโโโโโ๐บโโโโโ๐งโโโโ ๐ปโ' 
   global.butturl1 = 'https://github.com/CharithPramodyaSenanayake'
   global.linkbuttid2 = '๐ช ๐จโโโโโ๐ดโโโโโ๐ณโโโโโ๐นโโโโโ๐ฆโโโโโ๐จโโโโโ๐นโโโโโ ๐ฒโโโโโ๐ชโโโโ ๐ชโ'
   global.butturl2 = 'https://wa.me/94712448370?text=HI%20RATHI๐ค'
   global.linktext = '๐ปโโโโโ๐ฎโโโโโ๐ธโโโโโ๐ฎโโโโโ๐นโโโโโ ๐ฒโโโโโ๐พโโโโโ ๐ผโโโโโ๐ชโโโโโ๐งโโโโโ'
   global.linkurl = 'https://charithpramodyasenanayake.github.io/'
   global.profileimage = 'https://i.ibb.co/5vScqb1/botRATHI.jpg'
   global.mainimgurl = 'https://i.ibb.co/5vScqb1/botRATHI.jpg'
   //menu
   global.mlinktxt1 = '๐ทโโโโโ๐ฆโโโโโ๐นโโโโโ๐ญโโโโโ๐ฎโโโโโ ๐จโโโโโ๐ญโโโโโ๐ฆโโโโโ๐นโโโโโ๐ฟ'
   global.mlinkurl1 = 'https://www.mediafire.com/file/5hdl7frlxokfh8i/Rathi_Chatz.apk/file'
   global.mlinktxt2 = null 
   global.mlinkurl2 = null
   global.mbuttxt1 = 'แดสส แดแดแดแดแดษดแด๊ฑ'//rep 1
   global.mbutid1 = 'command'
   global.mbuttxt2 = null //rep 2
   global.mbutid2 = null
   global.mbuttxt3 = null//rep 3
   global.mbutid3 = null

//main
global.premium = [`${ownernum}`]
global.sessionName = 'session.rathi'
global.prefa = ['','!','.',',','๐','๐ญ',]
global.sp = '๐ญ'
global.devname = '๐ฒ๐ท๐ฐ๐๐ธ๐๐ท ๐๐ด๐ฝ๐ฐ๐ฝ๐ฐ๐๐ฐ๐บ๐ด (๐๐ฐ๐๐ท๐ธ)'
global.devNum = ['94712448370']
global.greetings = 'Hey  ๐๐ป'
global.listicon = '๐' 
global.wm = '๐๐ฐ๐๐ท๐ธ ๐ผ๐ณ ๐ฑ๐๐' 
global.botname = '๐๐ฐ๐๐ท๐ธ ๐ผ๐ณ ๐ฑ๐๐'
global.icon = '๐' 
global.mail = 'charipramodyasenanayake@gmail.com'
global.youtube = 'https://youtube.com/c/alienalfa'
global.github = 'https://github.com/Alien-alfa/' 
global.insta = 'https://www.instagram.com/alienalfa/' 
global.linkname = '๐๐ฐ๐๐ท๐ธ ๐ผ๐ณ'
global.mainfooter = '๐ทโโโโโ๐ฆโโโโโ๐นโโโโโ๐ญโโโโโ๐ฎโโโโโ ๐ฒโโโโโ๐ฉโโโโโ ๐งโโโโโ๐พโโโโโ ๐จโโโโโ๐ญโโโโโ๐ฆโโโโโ๐ทโโโโโ๐ฎโโโโโ' 
global.herokuapi = '' 
global.herokuapp = '' 

//bools
global.welcomeactive =  true
global.alivemess = true
global.aliveimage = true
global.speedmode =  'active'
global.ownermess = 'สแดส แดสษช๊ฑ ษช๊ฑ แดส แดแดกษดแดส !!'
global.autoread = false 
global.anticall = false 


global.thumb = fs.readFileSync('./lib/lowdb/adapters/rathi.jpg')

global.mess = {
    success: 'แดแดษดแด',
    errr: 'errแด',
    admin: 'แดษดสส แดแดแดษชษด',
    botAdmin: 'ษช แดกษชสส แดแด ษชแด, แดแดแดแด แดแด แดษด แดแดแดษชษด!',
    owner: 'แดแดกษดแดส แดแดแดแดแดษดแด!',
    group: 'แดสษช๊ฑ ษช๊ฑ ษดแดแด แด ษขสแดแดแด แดสแดแด!',
    private: 'แดสษช๊ฑ ษช๊ฑ แด ษขสแดแดแด, แด๊ฑแด ษชแด ษชษด แดสษชแด?แดแดแด แดสแดแด!',
    bot: '',
    wait: 'แดสแดแด๊ฑแด แดกแดษชแด...',
    endLimit: 'สแดแดส แดแดษชสส สษชแดษชแด สแด๊ฑ แดxแดษชสแดแด, แดสแด สษชแดษชแด แดกษชสส สแด สแด๊ฑแดแด แดแด?แดสส 12 สแดแดส๊ฑ',
    notext: 'แดษดแดแดส ๊ฑแดแดสแดส สษชษดแด๊ฑ!',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
