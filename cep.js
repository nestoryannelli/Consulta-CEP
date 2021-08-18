var cadastro = function(){ //criando a função
  var cadastro = {
       cep: document.getElementById("cep_via").value,    //busca os valores Json
        rua: document.getElementById("rua_via").value,
        bairro: document.getElementById("bairro_via").value,
        cidade: document.getElementById("cidade_via").value,
       estado: document.getElementById("estado_via").value, 
       ibge: document.getElementById("ibge_via").value,
       guia: document.getElementById("guia_via").value,  
       ddd: document.getElementById("ddd_via").value,
       siafi: document.getElementById("siafi_via").value,  
      };  
      localStorage.setItem('CADASTRO', JSON.stringify(cadastro));  
  }
  
    document.onchange = cadastro;    //condicional
  
    if(document.getElementById('id{{$row->id}}')){
    if (localStorage.cadastro) {
    document.getElementById('cep_via').value = JSON.parse(localStorage.getItem('cadastro')).cep;
    }
    if (localStorage.cadastro) {
    document.getElementById('rua_via').value = JSON.parse(localStorage.getItem('cadastro')).rua;
  }
    if (localStorage.cadastro) {
    document.getElementById('bairro_via').value = JSON.parse(localStorage.getItem('cadastro')).bairro;
  }
    if (localStorage.cadastro) {
    document.getElementById('cidade_via').value = JSON.parse(localStorage.getItem('cadastro')).cidade
  }
    if (localStorage.cadastro) {
    document.getElementById('estado_via').value = JSON.parse(localStorage.getItem('cadastro')).estado;
  }
  if (localStorage.cadastro) {
  document.getElementById('ibge_via').value = JSON.parse(localStorage.getItem('cadastro')).ibge;
}
if (localStorage.cadastro) {
document.getElementById('guia_via').value = JSON.parse(localStorage.getItem('cadastro')).guia;
}
if (localStorage.cadastro) {
document.getElementById('ddd_via').value = JSON.parse(localStorage.getItem('cadastro')).ddd;
}
if (localStorage.cadastro) {
document.getElementById('siafi_via').value = JSON.parse(localStorage.getItem('cadastro')).siafi;
  }}


function meu_callback(conteudo) {
if (!("erro" in conteudo)) {

    document.getElementById('rua_via').value=(conteudo.logradouro);
    document.getElementById('bairro_via').value=(conteudo.bairro);
    document.getElementById('cidade_via').value=(conteudo.localidade);
    document.getElementById('estado_via').value=(conteudo.uf);
    document.getElementById('ibge_via').value=(conteudo.ibge);
    document.getElementById('guia_via').value=(conteudo.guia);
    document.getElementById('ddd_via').value=(conteudo.ddd);
    document.getElementById('siafi_via').value=(conteudo.siafi);
} 
else {
  

    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

var cep = valor.replace(/\D/g, '');

if (cep != "") {

    var validacep = /^[0-9]{8}$/;

    if(validacep.test(cep)) {
        document.getElementById('rua_via').value="...";
        document.getElementById('bairro_via').value="...";
        document.getElementById('cidade_via').value="...";
        document.getElementById('estado_via').value="...";
        document.getElementById('ibge_via').value="...";
        document.getElementById('guia_via').value="...";
        document.getElementById('ddd_via').value="...";
        document.getElementById('siafi_via').value="...";
        var script = document.createElement('script');

        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        document.body.appendChild(script);

    } 
    else {

        alert("Formato de CEP inválido.");
    }
  }
};
