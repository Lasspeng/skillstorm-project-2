package com.skillstorm.project2.models;

import java.time.LocalDate;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import org.hibernate.annotations.DynamicUpdate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.util.Objects;

@Entity
@Table(name="Account")
public class Account implements UserDetails {

    public static enum FilingStatus {
        SINGLE, MARRIED
    }

    public static enum Role {
        ROLE_USER, ROLE_ADMIN
    }
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    @Enumerated(EnumType.STRING)
    private Role role;

    @Column
    private String email;

    @Column
    private String password;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    @Enumerated(EnumType.STRING)
    private FilingStatus filingStatus;

    @Column
    private String socialSecurity;

    @Column
    private String streetAddress;

    @Column
    private String city;

    @Column
    private String state;

    @Column
    private String zipCode;
    
    @Column
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    private LocalDate dateOfBirth;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "formW2Id", referencedColumnName = "id")
    private FormW2 formW2;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "form1099Id", referencedColumnName = "id")
    private Form1099 form1099;


    public Account() {
    }

    public Account(Integer id, Role role, String email, String password, String firstName, String lastName, FilingStatus filingStatus, String socialSecurity, String streetAddress, String city, String state, String zipCode, LocalDate dateOfBirth, FormW2 formW2, Form1099 form1099) {
        this.id = id;
        this.role = role;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.filingStatus = filingStatus;
        this.socialSecurity = socialSecurity;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.dateOfBirth = dateOfBirth;
        this.formW2 = formW2;
        this.form1099 = form1099;
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

    public FilingStatus getFilingStatus() {
        return this.filingStatus;
    }

    public void setFilingStatus(FilingStatus filingStatus) {
        this.filingStatus = filingStatus;
    }

    public String getSocialSecurity() {
        return this.socialSecurity;
    }

    public void setSocialSecurity(String socialSecurity) {
        this.socialSecurity = socialSecurity;
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

    public String getZipCode() {
        return this.zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public LocalDate getDateOfBirth() {
        return this.dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public FormW2 getFormW2() {
        return this.formW2;
    }

    public void setFormW2(FormW2 formW2) {
        this.formW2 = formW2;
    }

    public Form1099 getForm1099() {
        return this.form1099;
    }

    public void setForm1099(Form1099 form1099) {
        this.form1099 = form1099;
    }

    public Account id(Integer id) {
        setId(id);
        return this;
    }

    public Account role(Role role) {
        setRole(role);
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

    public Account firstName(String firstName) {
        setFirstName(firstName);
        return this;
    }

    public Account lastName(String lastName) {
        setLastName(lastName);
        return this;
    }

    public Account filingStatus(FilingStatus filingStatus) {
        setFilingStatus(filingStatus);
        return this;
    }

    public Account socialSecurity(String socialSecurity) {
        setSocialSecurity(socialSecurity);
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

    public Account zipCode(String zipCode) {
        setZipCode(zipCode);
        return this;
    }

    public Account dateOfBirth(LocalDate dateOfBirth) {
        setDateOfBirth(dateOfBirth);
        return this;
    }

    public Account formW2(FormW2 formW2) {
        setFormW2(formW2);
        return this;
    }

    public Account form1099(Form1099 form1099) {
        setForm1099(form1099);
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
        return Objects.equals(id, account.id) && Objects.equals(role, account.role) && Objects.equals(email, account.email) && Objects.equals(password, account.password) && Objects.equals(firstName, account.firstName) && Objects.equals(lastName, account.lastName) && Objects.equals(filingStatus, account.filingStatus) && Objects.equals(socialSecurity, account.socialSecurity) && Objects.equals(streetAddress, account.streetAddress) && Objects.equals(city, account.city) && Objects.equals(state, account.state) && Objects.equals(zipCode, account.zipCode) && Objects.equals(dateOfBirth, account.dateOfBirth) && Objects.equals(formW2, account.formW2) && Objects.equals(form1099, account.form1099);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, role, email, password, firstName, lastName, filingStatus, socialSecurity, streetAddress, city, state, zipCode, dateOfBirth, formW2, form1099);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", role='" + getRole() + "'" +
            ", email='" + getEmail() + "'" +
            ", password='" + getPassword() + "'" +
            ", firstName='" + getFirstName() + "'" +
            ", lastName='" + getLastName() + "'" +
            ", filingStatus='" + getFilingStatus() + "'" +
            ", socialSecurity='" + getSocialSecurity() + "'" +
            ", streetAddress='" + getStreetAddress() + "'" +
            ", city='" + getCity() + "'" +
            ", state='" + getState() + "'" +
            ", zipCode='" + getZipCode() + "'" +
            ", dateOfBirth='" + getDateOfBirth() + "'" +
            ", formW2='" + getFormW2() + "'" +
            ", form1099='" + getForm1099() + "'" +
            "}";
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        if (getRole() != null) {
            SimpleGrantedAuthority userRole = new SimpleGrantedAuthority(role.name());
            authorities.add(userRole);
        }

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
