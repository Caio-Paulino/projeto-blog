package br.com.api.blog.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.blog.modelo.BlogModelo;
import br.com.api.blog.servico.BlogServico;

import java.util.Optional;

// Camada Controle: responsável por criar rotas e ter acesso a requisições

@RestController // Anotação Spring para camada de controle
@CrossOrigin(origins = "*") // Especifica que tipo de porta está liberado para API enviar ou receber informações  
public class BlogControle {
    
    @Autowired
    private BlogServico bs; // Objeto para ter acesso ao serviço

    // Rota de criação de post
    @PostMapping("/criar-post")
    public ResponseEntity<?> criarPost(@RequestBody BlogModelo bm) {
        return bs.criarPost(bm);
    }

    // Rota de listagem 
    @GetMapping("/listar")
    public Iterable<BlogModelo> listar() {
        return bs.listar();
    }

    // Rota de listagem por id
    @GetMapping("/post/{id}")
    public ResponseEntity<BlogModelo> listarPorId(@PathVariable long id) {
        Optional<BlogModelo> optional = bs.listarPorId(id);
    
        if (optional.isPresent()) {
            return ResponseEntity.ok(optional.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Rota de deletar
    @DeleteMapping("/post/{id}")
    public ResponseEntity<Void> deletar(@PathVariable long id) {
        boolean success = bs.deletar(id);

        if(success) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    // Rota para testar se API está funcionando
    @GetMapping("/")
    public String rota() {
        return "API de publicações funcionando!";
    }
}
