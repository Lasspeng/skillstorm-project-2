package com.skillstorm.project2.models;

public class TaxResults {
    
    double taxesOwed;


    public TaxResults() {
    }

    public TaxResults(double taxesOwed) {
        this.taxesOwed = taxesOwed;
    }

    public double getTaxesOwed() {
        return this.taxesOwed;
    }

    public void setTaxesOwed(double taxesOwed) {
        this.taxesOwed = taxesOwed;
    }

    public TaxResults taxesOwed(double taxesOwed) {
        setTaxesOwed(taxesOwed);
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
        return taxesOwed == taxResults.taxesOwed;
    }

    @Override
    public String toString() {
        return "{" +
            " taxesOwed='" + getTaxesOwed() + "'" +
            "}";
    }
    
}
