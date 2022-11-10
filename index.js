let submit = document.getElementById("submit");

if (localStorage.getItem("Cadastros") == null){
    localStorage.setItem("Cadastros", "[]");
}


submit.addEventListener("click", () => {
    var guarda = JSON.parse(localStorage.getItem("Cadastros"));
    let nome = document.getElementById("nome").value;    
    let sobrenome = document.getElementById("sobrenome").value;
    let CPF = document.getElementById("CPF").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;

    CPF = CPF.replace("-","");
    
    var object = {"nome":nome, "sobrenome":sobrenome, "CPF":CPF, "email":email, "telefone":telefone};

    localStorage.setItem("Cadastros", JSON.stringify([...guarda,object]));
    alert("Cadastro feito com sucesso!");
})