package com.skillstorm.project2.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.Objects;

import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name = "FormW2")
public class FormW2 {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(columnDefinition = "real default 0.0")
    private double wages;

    @Column(columnDefinition = "real default 0.0")
    private double taxWithheld;

    @Column
    private String employerName;


    public FormW2() {
    }

    public FormW2(int id, double wages, double taxWithheld, String employerName) {
        this.id = id;
        this.wages = wages;
        this.taxWithheld = taxWithheld;
        this.employerName = employerName;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getWages() {
        return this.wages;
    }

    public void setWages(double wages) {
        this.wages = wages;
    }

    public double getTaxWithheld() {
        return this.taxWithheld;
    }

    public void setTaxWithheld(double taxWithheld) {
        this.taxWithheld = taxWithheld;
    }

    public String getEmployerName() {
        return this.employerName;
    }

    public void setEmployerName(String employerName) {
        this.employerName = employerName;
    }

    public FormW2 id(int id) {
        setId(id);
        return this;
    }

    public FormW2 wages(double wages) {
        setWages(wages);
        return this;
    }

    public FormW2 taxWithheld(double taxWithheld) {
        setTaxWithheld(taxWithheld);
        return this;
    }

    public FormW2 employerName(String employerName) {
        setEmployerName(employerName);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof FormW2)) {
            return false;
        }
        FormW2 formW2 = (FormW2) o;
        return id == formW2.id && wages == formW2.wages && taxWithheld == formW2.taxWithheld && Objects.equals(employerName, formW2.employerName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, wages, taxWithheld, employerName);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", wages='" + getWages() + "'" +
            ", taxWithheld='" + getTaxWithheld() + "'" +
            ", employerName='" + getEmployerName() + "'" +
            "}";
    }

}
