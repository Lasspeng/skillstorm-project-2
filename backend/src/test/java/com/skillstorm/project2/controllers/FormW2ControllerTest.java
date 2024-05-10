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
import com.skillstorm.project2.models.FormW2;
import com.skillstorm.project2.services.FormW2Service;

@ExtendWith(MockitoExtension.class)
public class FormW2ControllerTest {
    
    @Mock
    private FormW2Service formService;

    @InjectMocks
    private FormW2Controller formController;

    private FormW2 form = new FormW2();

    @Test
    public void testFindFormW2ById() {

        Mockito.when(formService.findFormById(1)).thenReturn(form);

        ResponseEntity<FormW2> response = formController.findFormW2ById(1);

        assertEquals(response.getStatusCode(), HttpStatus.OK);
        assertEquals(response.getBody(), form);
    }

    @Test
    public void testUpdate1099Form() {

        Mockito.when(formService.updateForm(form)).thenReturn(form);

        ResponseEntity<FormW2> response = formController.updateFormW2(form);

        assertEquals(response.getStatusCode(), HttpStatus.OK);
        assertEquals(response.getBody(), form);


        Mockito.when(formService.updateForm(form)).thenThrow(ResourceNotFoundException.class);

        assertThrows(ResourceNotFoundException.class, () -> formController.updateFormW2(form));
    }
    
    @Test
    public void testDeleteW2Form() {

        Mockito.doNothing().when(formService).deleteForm(1);

        ResponseEntity<Void> response = formController.deleteW2Form(1);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);


        Mockito.doThrow(ResourceNotFoundException.class).when(formService).deleteForm(1);

        assertThrows(ResourceNotFoundException.class, () -> formController.deleteW2Form(1));
    }
}
