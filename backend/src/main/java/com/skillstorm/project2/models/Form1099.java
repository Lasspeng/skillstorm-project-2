package com.skillstorm.project2.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.Objects;

@Entity
@Table(name = "Form1099")
public class Form1099 {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(columnDefinition = "real default 0.0")
    private double wages;

    @Column(columnDefinition = "real default 0.0")
    private double taxWithheld;


    public Form1099() {
    }

    public Form1099(int id, double wages, double taxWithheld) {
        this.id = id;
        this.wages = wages;
        this.taxWithheld = taxWithheld;
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

    public Form1099 id(int id) {
        setId(id);
        return this;
    }

    public Form1099 wages(double wages) {
        setWages(wages);
        return this;
    }

    public Form1099 taxWithheld(double taxWithheld) {
        setTaxWithheld(taxWithheld);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Form1099)) {
            return false;
        }
        Form1099 form1099 = (Form1099) o;
        return id == form1099.id && wages == form1099.wages && taxWithheld == form1099.taxWithheld;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, wages, taxWithheld);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", wages='" + getWages() + "'" +
            ", taxWithheld='" + getTaxWithheld() + "'" +
            "}";
    }

}
