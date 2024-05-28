package br.com.api.blog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//Inicializador do framework Spring

@SpringBootApplication
public class BlogApplication {

	public static void main(String[] args) {
		SpringApplication.run(BlogApplication.class, args);
	}
	
	//Configuração do Spring
	@Configuration

	// Configurando CORS para receber qualquer método (GET, POST, PUT, DELETE)
	public static class WebConfig implements WebMvcConfigurer {
		@Override
		public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) {
		registry.addMapping("/**")
				.allowedOrigins("http://localhost:3000")
				.allowedMethods("GET", "POST", "PUT", "DELETE");
		}
	}
}