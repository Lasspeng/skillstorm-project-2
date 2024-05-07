package com.skillstorm.project2.models;
import java.util.Objects;

public class TaxResults {
    
    private double taxableIncome;
    private double taxRate;
    private double taxRefund;


    public TaxResults() {
    }

    public TaxResults(double taxableIncome, double taxRate, double taxRefund) {
        this.taxableIncome = taxableIncome;
        this.taxRate = taxRate;
        this.taxRefund = taxRefund;
    }

    public double getTaxableIncome() {
        return this.taxableIncome;
    }

    public void setTaxableIncome(double taxableIncome) {
        this.taxableIncome = taxableIncome;
    }

    public double getTaxRate() {
        return this.taxRate;
    }

    public void setTaxRate(double taxRate) {
        this.taxRate = taxRate;
    }

    public double getTaxRefund() {
        return this.taxRefund;
    }

    public void setTaxRefund(double taxRefund) {
        this.taxRefund = taxRefund;
    }

    public TaxResults taxableIncome(double taxableIncome) {
        setTaxableIncome(taxableIncome);
        return this;
    }

    public TaxResults taxRate(double taxRate) {
        setTaxRate(taxRate);
        return this;
    }

    public TaxResults taxRefund(double taxRefund) {
        setTaxRefund(taxRefund);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof TaxResults)) {
            return false;
        }
        TaxResults taxResults = (TaxResults) o;
        return taxableIncome == taxResults.taxableIncome && taxRate == taxResults.taxRate && taxRefund == taxResults.taxRefund;
    }

    @Override
    public int hashCode() {
        return Objects.hash(taxableIncome, taxRate, taxRefund);
    }

    @Override
    public String toString() {
        return "{" +
            " taxableIncome='" + getTaxableIncome() + "'" +
            ", taxRate='" + getTaxRate() + "'" +
            ", taxRefund='" + getTaxRefund() + "'" +
            "}";
    }
    
}
