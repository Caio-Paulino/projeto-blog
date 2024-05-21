package br.com.api.blog.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.blog.modelo.BlogModelo;
import br.com.api.blog.modelo.RespostaModelo;
import br.com.api.blog.servico.BlogServico;

import java.util.Optional;

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

    @GetMapping("/post/{id}")
    public ResponseEntity<BlogModelo> listarPorId(@PathVariable long id) {
        Optional<BlogModelo> optional = bs.listarPorId(id);
    
        if (optional.isPresent()) {
            return ResponseEntity.ok(optional.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/post/{id}")
    public ResponseEntity<Void> deletar(@PathVariable long id) {
        boolean success = bs.deletar(id);

        if(success) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/")
    public String rota() {
        return "API de publicações funcionando!";
    }
}
