package br.com.api.blog.modelo;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component // Anotação que deixa Spring responsável por criar objeto
@Getter //Getter e Setter: anotações Lombok que cria os getters e setters
@Setter
public class RespostaModelo {
    // Resposta ao usuário
    private String mensagem;
        
}
