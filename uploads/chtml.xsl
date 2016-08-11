<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"  xmlns:tei="http://www.tei-c.org/ns/1.0">
<xsl:output method="html" version="4.0"
encoding="UTF-8" indent="no"/>

<xsl:template match="/">
  <html>
  <body>
  <div>
   <xsl:apply-templates select="tei:TEI/tei:text/tei:body/tei:div"/>
   </div>
  </body>
  </html>
</xsl:template>



<xsl:template match="tei:p">
<p><xsl:apply-templates/></p>
</xsl:template>

<xsl:template match="tei:pb">
<span class="pb {@xml:id}"><xsl:value-of select="." /></span>
</xsl:template>


<xsl:template match="tei:add">
<span class="sup"><xsl:apply-templates/></span>
</xsl:template>

<xsl:template match="tei:hi[@rend = 'underlined']">
<span class="underline"><xsl:apply-templates/></span>
</xsl:template>

<xsl:template match="tei:del">
<span class="del"><xsl:apply-templates/></span>
</xsl:template>

<xsl:template match="tei:unclear">
<span class="unclear"><xsl:apply-templates/></span>
</xsl:template>

</xsl:stylesheet>
