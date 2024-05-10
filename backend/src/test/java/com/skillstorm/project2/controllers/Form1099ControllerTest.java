package com.skillstorm.project2.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.skillstorm.project2.exceptions.ResourceNotFoundException;
import com.skillstorm.project2.models.Form1099;
import com.skillstorm.project2.services.Form1099Service;

@ExtendWith(MockitoExtension.class)
public class Form1099ControllerTest {

    @Mock
    private Form1099Service formService;

    @InjectMocks
    private Form1099Controller formController;

    private Form1099 form = new Form1099();

    @Test
    public void testFindForm1099ById() {

        Mockito.when(formService.findFormById(1)).thenReturn(form);

        ResponseEntity<Form1099> response = formController.findForm1099ById(1);

        assertEquals(response.getStatusCode(), HttpStatus.OK);
        assertEquals(response.getBody(), form);


        Mockito.when(formService.findFormById(1)).thenThrow(ResourceNotFoundException.class);

        assertThrows(ResourceNotFoundException.class, () -> formController.findForm1099ById(1));
    }

    @Test
    public void testUpdateForm1099() {

        Mockito.when(formService.updateForm(form)).thenReturn(form);

        ResponseEntity<Form1099> response = formController.updateForm1099(form);

        assertEquals(response.getStatusCode(), HttpStatus.OK);
        assertEquals(response.getBody(), form);

        
        Mockito.when(formService.updateForm(form)).thenThrow(ResourceNotFoundException.class);

        assertThrows(ResourceNotFoundException.class, () -> formController.updateForm1099(form));
    }

    @Test
    public void testDeleteForm1099() {

        Mockito.doNothing().when(formService).deleteForm(1);

        ResponseEntity<Form1099> response = formController.deleteForm1099(1);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);


        Mockito.doThrow(ResourceNotFoundException.class).when(formService).deleteForm(1);

        assertThrows(ResourceNotFoundException.class, () -> formController.deleteForm1099(1));
    }
}
