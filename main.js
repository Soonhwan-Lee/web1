$(document).ready(function(){
    $('.left_nav div .left_nav2,.sub').mouseover(function(){ //Shopping �� ���콺 ����
        $('.sub').css('display','block');//������ ��ǰ ���
    });
    
    $('.left_nav div .left_nav2,.sub').mouseout(function(){
        $('.sub').css('display',''); //������ ��ǰ ��� �ȵǰ� ����
    });
    
    $('.m1,.sub1').mouseover(function(){ //������ ��ǰ�� ���콺 ����
        $('.sub1').css('display','block');//������ �׸��� ������ ����
    });
    
    $('.m1,.sub1').mouseout(function(){//������ �׸��� �ȳ����� ����
        $('.sub1').css('display','');
    });
});