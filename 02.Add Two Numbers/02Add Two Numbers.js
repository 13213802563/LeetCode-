/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var addTwoNumbers=function(l1,l2){
	var numL1=getNumber(l1);
	var numL2=getNumber(l2);
	var  flag;//标志位
	
	var length;
	if(numL1.length>numL2.length){//3845>666
		flag=0;//
		length=numL1.length;		
	}else{
		flag=1;
		length=numL2.length;
	}
	var temp=0;//相加时溢出为1
	for(var i=0;i<length;i++){
		//首位是否为空
		if(numL1[i]===undefined){
			numL1[i]=0;
		}
		if(numL2[i]===undefined){
			numL2[i]=0;
		}
		numL1[i]=numL2[i]+numL1[i]+temp;//诸位相加
		//想加是否溢出
		if(numL1[i]>=10){
			numL1[i]=numL1[i]%10;
			temp=1;
		}else{
			temp=0;
		}
	}
	if(temp){
		numL1[numL1.length]=1;
	}
  //将最后的结果值以链表输出
	var res={
		l1:{}
	}
	res.l1=new ListNode(numL1[0]);//head头结点
	var p=res.l1;
	console.log(p);
	for(var i=1;i<numL1.length;i++){
		p.next=new ListNode(numL1[i]);
		p=p.next;
	}
	return res.l1;

//得到链表的数字
function getNumber(list){
	var num=[];
	while(list){
		num.push(list.val);
		list=list.next;
	}
	return num;
}
function ListNode(val){
	this.val=val;
	this.next=null;
}
}
addTwoNumbers({
	val:2,
	next:{
		val:4,
		next:{
			val:3,
			next:null
		}
	}
},{
	val:5,
	next:{
		val:6,
		next:{
			val:9,
			next:null
		}
	}
})

