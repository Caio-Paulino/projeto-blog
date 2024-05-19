package br.com.api.blog.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.blog.modelo.UserModelo;
import br.com.api.blog.servico.UserServico;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class UserControle {
    
    @Autowired
    private UserServico us;

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody UserModelo um) {
        return us.cadastrar(um);
    }

    @PostMapping("/logar")
    public ResponseEntity<?> logar(@RequestBody UserModelo um) {
        return us.logar(um);
    }
    
}
