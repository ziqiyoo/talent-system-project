package com.example.sys.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * <p>
 * 
 * </p>
 *
 * @author soso
 * @since 2023-11-09
 */
@TableName("m_kbn_values")
public class KbnValues implements Serializable {

    private static final long serialVersionUID = 1L;

    private String valueId;

    private String catagoryId;

    private String code;

    private String label;

    private String description;

    private Integer order;

    private String createdBy;

    private LocalDateTime createdAt;

    private String updatedBy;

    private LocalDateTime updatedAt;

    private Integer lockNo;

    public String getValueId() {
        return valueId;
    }

    public void setValueId(String valueId) {
        this.valueId = valueId;
    }
    public String getCatagoryId() {
        return catagoryId;
    }

    public void setCatagoryId(String catagoryId) {
        this.catagoryId = catagoryId;
    }
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    public Integer getOrder() {
        return order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }
    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }
    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
    public Integer getLockNo() {
        return lockNo;
    }

    public void setLockNo(Integer lockNo) {
        this.lockNo = lockNo;
    }

    @Override
    public String toString() {
        return "KbnValues{" +
            "valueId=" + valueId +
            ", catagoryId=" + catagoryId +
            ", code=" + code +
            ", label=" + label +
            ", description=" + description +
            ", order=" + order +
            ", createdBy=" + createdBy +
            ", createdAt=" + createdAt +
            ", updatedBy=" + updatedBy +
            ", updatedAt=" + updatedAt +
            ", lockNo=" + lockNo +
        "}";
    }
}
