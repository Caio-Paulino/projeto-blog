package br.com.api.blog.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.blog.modelo.BlogModelo;
import br.com.api.blog.servico.BlogServico;

@RestController
@CrossOrigin(origins = "*")
public class BlogControle {
    
    @Autowired
    private BlogServico bs; 

    @PostMapping("/criar-post")
    public ResponseEntity<?> criarPost(@RequestBody BlogModelo bm) {
        return bs.criarPost(bm);
    }

    @GetMapping("/listar")
    public Iterable<BlogModelo> listar() {
        return bs.listar();
    }

    @GetMapping("/")
    public String rota() {
        return "API de publicações funcionando!";
    }
}
