<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
 <xsl:output method="html" indent="yes"/>
<xsl:template match="Countries">
    <table id="sortable">
        <colgroup>
            <col class="idcol"/>
            <col class="countrycol"/>
            <col class="birthdaycol"/>
            <col class="cellphonescol"/>
            <col class="childrencol"/>
            <col class="electricitycol"/>
            <col class="internetcol"/>
        </colgroup>
        <thead>
            <tr>
                <th>ID</th>
                <th onclick="sort(1)">
                    Country 
                    <i class="fa fa-angle-up" aria-hidden="true"></i>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </th>
                <th>birth rate / 1000</th>
                <th>cellphones / 100</th>
                <th>children / woman</th>
                <th>electric usage</th>
                <th>internet usage / 100</th>
            </tr>
        </thead>
        <tbody>
            <xsl:for-each select="Country">
                <tr>
                    <td><xsl:value-of select="id"/></td>
                    <td><xsl:value-of select="name"/></td>
                    <td><xsl:value-of select="birth_rate_per_1000"/></td>
                    <td><xsl:value-of select="cell_phones_per_100"/></td>
                    <td><xsl:value-of select="children_per_woman"/></td>
                    <td><xsl:value-of select="electricity_consumption_per_capita"/></td>
                    <td><xsl:value-of select="internet_user_per_100"/></td>
                </tr>
            </xsl:for-each>
        </tbody>
    </table>
</xsl:template>

</xsl:stylesheet>