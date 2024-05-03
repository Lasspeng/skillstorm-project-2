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
    private double taxWriteOffs;


    public Form1099() {
    }

    public Form1099(int id, double wages, double taxWriteOffs) {
        this.id = id;
        this.wages = wages;
        this.taxWriteOffs = taxWriteOffs;
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

    public double getTaxWriteOffs() {
        return this.taxWriteOffs;
    }

    public void setTaxWriteOffs(double taxWriteOffs) {
        this.taxWriteOffs = taxWriteOffs;
    }

    public Form1099 id(int id) {
        setId(id);
        return this;
    }

    public Form1099 wages(double wages) {
        setWages(wages);
        return this;
    }

    public Form1099 taxWriteOffs(double taxWriteOffs) {
        setTaxWriteOffs(taxWriteOffs);
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
        return id == form1099.id && wages == form1099.wages && taxWriteOffs == form1099.taxWriteOffs;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, wages, taxWriteOffs);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", wages='" + getWages() + "'" +
            ", taxWriteOffs='" + getTaxWriteOffs() + "'" +
            "}";
    }

}
