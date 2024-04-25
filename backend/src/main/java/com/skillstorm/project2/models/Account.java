package com.skillstorm.project2.models;

import java.time.LocalDate;
import java.util.Collection;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Account")
public class Account implements UserDetails {

    // public static enum FilingStatus {
    //     HEAD_OF_HOUSEHOLD, MARRIED_FILING_JOINTLY, MARRIED_FILING_SEPARATE, SINGLE
    // }

    public static enum Role {
        ROLE_USER, ROLE_ADMIN
    }
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column
    Role role;

    @Column
    String firstName;

    @Column
    String lastName;

    @Column
    String email;

    @Column
    String password;

    @Column
    String streetAddress;

    @Column
    String city;

    @Column
    String state;

    @Column
    Integer zipCode;
    
    @Column
    LocalDate dateOfBirth;

    @Column
    Integer socialSecurity;

    @Column
    String filingStatus;

    @Column
    Double incomeW2;

    @Column
    Double witheldW2;

    @Column
    String addressW2;

    @Column
    Double income1099;

    @Column
    Double witheld1099;

    @Column
    String address1099;


    public Account() {
    }

    public Account(Integer id, Role role, String firstName, String lastName, String email, String password, String streetAddress, String city, String state, Integer zipCode, LocalDate dateOfBirth, Integer socialSecurity, String filingStatus, Double incomeW2, Double witheldW2, String addressW2, Double income1099, Double witheld1099, String address1099) {
        this.id = id;
        this.role = role;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.dateOfBirth = dateOfBirth;
        this.socialSecurity = socialSecurity;
        this.filingStatus = filingStatus;
        this.incomeW2 = incomeW2;
        this.witheldW2 = witheldW2;
        this.addressW2 = addressW2;
        this.income1099 = income1099;
        this.witheld1099 = witheld1099;
        this.address1099 = address1099;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Role getRole() {
        return this.role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getStreetAddress() {
        return this.streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCity() {
        return this.city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return this.state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Integer getZipCode() {
        return this.zipCode;
    }

    public void setZipCode(Integer zipCode) {
        this.zipCode = zipCode;
    }

    public LocalDate getDateOfBirth() {
        return this.dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Integer getSocialSecurity() {
        return this.socialSecurity;
    }

    public void setSocialSecurity(Integer socialSecurity) {
        this.socialSecurity = socialSecurity;
    }

    public String getFilingStatus() {
        return this.filingStatus;
    }

    public void setFilingStatus(String filingStatus) {
        this.filingStatus = filingStatus;
    }

    public Double getIncomeW2() {
        return this.incomeW2;
    }

    public void setIncomeW2(Double incomeW2) {
        this.incomeW2 = incomeW2;
    }

    public Double getWitheldW2() {
        return this.witheldW2;
    }

    public void setWitheldW2(Double witheldW2) {
        this.witheldW2 = witheldW2;
    }

    public String getAddressW2() {
        return this.addressW2;
    }

    public void setAddressW2(String addressW2) {
        this.addressW2 = addressW2;
    }

    public Double getIncome1099() {
        return this.income1099;
    }

    public void setIncome1099(Double income1099) {
        this.income1099 = income1099;
    }

    public Double getWitheld1099() {
        return this.witheld1099;
    }

    public void setWitheld1099(Double witheld1099) {
        this.witheld1099 = witheld1099;
    }

    public String getAddress1099() {
        return this.address1099;
    }

    public void setAddress1099(String address1099) {
        this.address1099 = address1099;
    }

    public Account id(Integer id) {
        setId(id);
        return this;
    }

    public Account role(Role role) {
        setRole(role);
        return this;
    }

    public Account firstName(String firstName) {
        setFirstName(firstName);
        return this;
    }

    public Account lastName(String lastName) {
        setLastName(lastName);
        return this;
    }

    public Account email(String email) {
        setEmail(email);
        return this;
    }

    public Account password(String password) {
        setPassword(password);
        return this;
    }

    public Account streetAddress(String streetAddress) {
        setStreetAddress(streetAddress);
        return this;
    }

    public Account city(String city) {
        setCity(city);
        return this;
    }

    public Account state(String state) {
        setState(state);
        return this;
    }

    public Account zipCode(Integer zipCode) {
        setZipCode(zipCode);
        return this;
    }

    public Account dateOfBirth(LocalDate dateOfBirth) {
        setDateOfBirth(dateOfBirth);
        return this;
    }

    public Account socialSecurity(Integer socialSecurity) {
        setSocialSecurity(socialSecurity);
        return this;
    }

    public Account filingStatus(String filingStatus) {
        setFilingStatus(filingStatus);
        return this;
    }

    public Account incomeW2(Double incomeW2) {
        setIncomeW2(incomeW2);
        return this;
    }

    public Account witheldW2(Double witheldW2) {
        setWitheldW2(witheldW2);
        return this;
    }

    public Account addressW2(String addressW2) {
        setAddressW2(addressW2);
        return this;
    }

    public Account income1099(Double income1099) {
        setIncome1099(income1099);
        return this;
    }

    public Account witheld1099(Double witheld1099) {
        setWitheld1099(witheld1099);
        return this;
    }

    public Account address1099(String address1099) {
        setAddress1099(address1099);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Account)) {
            return false;
        }
        Account account = (Account) o;
        return Objects.equals(id, account.id) && Objects.equals(role, account.role) && Objects.equals(firstName, account.firstName) && Objects.equals(lastName, account.lastName) && Objects.equals(email, account.email) && Objects.equals(password, account.password) && Objects.equals(streetAddress, account.streetAddress) && Objects.equals(city, account.city) && Objects.equals(state, account.state) && Objects.equals(zipCode, account.zipCode) && Objects.equals(dateOfBirth, account.dateOfBirth) && Objects.equals(socialSecurity, account.socialSecurity) && Objects.equals(filingStatus, account.filingStatus) && Objects.equals(incomeW2, account.incomeW2) && Objects.equals(witheldW2, account.witheldW2) && Objects.equals(addressW2, account.addressW2) && Objects.equals(income1099, account.income1099) && Objects.equals(witheld1099, account.witheld1099) && Objects.equals(address1099, account.address1099);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, role, firstName, lastName, email, password, streetAddress, city, state, zipCode, dateOfBirth, socialSecurity, filingStatus, incomeW2, witheldW2, addressW2, income1099, witheld1099, address1099);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", role='" + getRole() + "'" +
            ", firstName='" + getFirstName() + "'" +
            ", lastName='" + getLastName() + "'" +
            ", email='" + getEmail() + "'" +
            ", password='" + getPassword() + "'" +
            ", streetAddress='" + getStreetAddress() + "'" +
            ", city='" + getCity() + "'" +
            ", state='" + getState() + "'" +
            ", zipCode='" + getZipCode() + "'" +
            ", dateOfBirth='" + getDateOfBirth() + "'" +
            ", socialSecurity='" + getSocialSecurity() + "'" +
            ", filingStatus='" + getFilingStatus() + "'" +
            ", incomeW2='" + getIncomeW2() + "'" +
            ", witheldW2='" + getWitheldW2() + "'" +
            ", addressW2='" + getAddressW2() + "'" +
            ", income1099='" + getIncome1099() + "'" +
            ", witheld1099='" + getWitheld1099() + "'" +
            ", address1099='" + getAddress1099() + "'" +
            "}";
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        SimpleGrantedAuthority userRole = new SimpleGrantedAuthority(getRole().name());
        authorities.add(userRole);

        return authorities;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }



}
